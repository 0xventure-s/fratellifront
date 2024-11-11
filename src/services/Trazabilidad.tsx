/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import axios from "axios";
import { safeParse } from "valibot";
import { TrazabilidadSchema, TrazabilidadSchemas } from "../schemas";

export type TrazabilidadData = {
  [k: string]: FormDataEntryValue;
};

export async function CrearNuevaTrazabilidad(data: TrazabilidadData) {
  try {
    // Validar y parsear los datos con safeParse
    const result = safeParse(TrazabilidadSchema, {
      cantidadMP: +data.cantidadMP,
      LR1: +data.LR1,
      fechaHoraInicio: new Date(data.fechaHoraInicio as string),
    });

    console.log(result);

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/fratelli/trazabilidad`;
      
      // Realiza la solicitud POST al backend
      const response = await axios.post(url, {
        cantidadMP: result.output.cantidadMP,
        LR1: result.output.LR1,
        fechaHoraInicio: result.output.fechaHoraInicio,
      });

      // Imprimir el resultado completo del backend, incluyendo variedad
      console.log("Trazabilidad creada:", response.data);

      // Accede a `variedad` de la respuesta del backend
      const variedad = response.data.data.materiaPrima.variedad;
      console.log("Variedad de Materia Prima:", variedad);
      
      return response.data; // Devolver la data si se necesita en otro lugar
    }
  } catch (error) {
    console.error("Error al crear trazabilidad:", error);
  }
}





export async function verTrazabilidad() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/fratelli/trazabilidad/vertodos`;
    const { data } = await axios.get(url);

    console.log("Datos recibidos para validar:", data.data); // Verifica la estructura de los datos

    // Convierte y valida los datos recibidos
    const result = safeParse(TrazabilidadSchemas, data.data.map((item: any) => ({
      ...item,
      fechaHoraInicio: new Date(item.fechaHoraInicio), // Asegúrate de convertir la fecha correctamente
      materiaPrima: item.materiaPrima, // Asegúrate de incluir materiaPrima
    }))); console.log(result);
    

    if (result.success) {
      console.log("Datos de trazabilidad válidos:", result.output);
      return result.output; // Devuelve los datos válidos 
    } else {
     
      return []; // Retorna un array vacío si la validación falla
    } 
    
  } catch (error) {
    console.log("Error al obtener trazabilidad:", error);
    return []; // Retorna un array vacío en caso de error
  }
}


