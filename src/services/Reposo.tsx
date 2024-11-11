import axios from "axios";
import { safeParse } from "valibot";
import { ReposoSchema } from "../schemas";

type CrearNuevoTostadoProps = {
    [k: string]: FormDataEntryValue;
  };
  
  export async function CrearNuevoReposo(
    data: CrearNuevoTostadoProps,
    id: number
  ) {
    console.log("ID LOCO", id);
  
    try {
      // Validar y parsear los datos con safeParse
  
      const result = safeParse(ReposoSchema, {
        inicioTrazabilidadId: Number(id),
        cantidadPerdida:+data.cantidadPerdida,
        tiempoReposo:+data.tiempoReposo
      });
  
      console.log("RESULT", result);
  
      if (result.success) {
        const url = `${
          import.meta.env.VITE_API_URL
        }/api/fratelli/trazabilidad/reposo/:id`;
        console.log(url);
  
        const response = await axios.post(url, result.output);
  
        console.log("Tostado creado:", response.data);
        return response.data;
      } else {
        throw new Error("Datos no válidos");
      }
    } catch (error) {
      console.error("Error al crear tostado:", error);
    }
  }