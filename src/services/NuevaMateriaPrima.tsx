import axios from "axios";
import { safeParse } from "valibot";
import { DraftProductSchema, NuevaMateriasPrima } from "../schemas";

export type MateriaPrimaData = {
  [k: string]: FormDataEntryValue;
};

export async function CrearNuevaMateriaPrima(data: MateriaPrimaData) {
  try {
    const result = safeParse(DraftProductSchema, {
      lote: data.lote,
      variedad: data.variedad,
      cantidad: +data.cantidad,
      // Convierte el string a Date aquí
      fechadeentrega: new Date(data.fechadeentrega as string),
    });

    if (result.success) {
      const url = `${import.meta.env.VITE_API_URL}/api/fratelli`;
      await axios.post(url, {
        lote: result.output.lote,
        variedad: result.output.variedad,
        cantidad: result.output.cantidad,
        fechadeentrega: result.output.fechadeentrega, // Este ahora es un objeto Date
      });
    } 
  } catch (error) {
    console.log("Error al crear materia prima:", error);
  }
}

export async function VerMateriaPrima() {
  try {
    const url = `${import.meta.env.VITE_API_URL}/api/fratelli`;
    const { data } = await axios.get(url);

    console.log("Datos recibidos para validar:", data.data); // Verifica la estructura de los datos

    const result = safeParse(NuevaMateriasPrima, data.data.map((item: { fechadeentrega: string | number | Date; }) => ({
      ...item,
      fechadeentrega: new Date(item.fechadeentrega), // Convierte aquí también
    })));

    if (result.success) {
      return result.output; // Asegúrate de que sea un array
    } else {
       // Muestra errores si hay
      return []; // Retorna un array vacío si la validación falla
    }
  } catch (error) {
    console.log("Error al obtener materia prima:", error);
    return []; // Retorna un array vacío en caso de error
  }
}
