import axios from "axios";
import { safeParse } from "valibot"; // Asegúrate de tener esto importado
import { TostadoSchema } from "../schemas";

// Ajusta la ruta según tu estructura

type CrearNuevoTostadoProps = {
  [k: string]: FormDataEntryValue;
};

export async function CrearNuevoTostado(
  data: CrearNuevoTostadoProps,
  id: number
) {
  console.log("ID LOCO", id);

  try {
    // Validar y parsear los datos con safeParse

    const result = safeParse(TostadoSchema, {
      inicioTrazabilidadId: Number(id),
      fechaHoraTostado: new Date(data.fechaHoraTostado as string),
      tipoDeTostado: data.tipoDeTostado,
      temperatura: +data.temperatura,
      humedad: +data.humedad,
      tiempoDeTostado: +data.tiempoDeTostado,
    });

    console.log("RESULT", result);

    if (result.success) {
      const url = `${
        import.meta.env.VITE_API_URL
      }/api/fratelli/trazabilidad/tostadero/:id`;
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

export async function ObtenerTostadoPorId(id: number) {
  try {
    const url = `${
      import.meta.env.VITE_API_URL
    }/api/fratelli/trazabilidad/tostadero/${id}`;
    console.log("URL de GET:", url);

    const response = await axios.get(url);
    console.log("Datos del Tostado obtenidos:", response.data);

    return response.data;
  } catch (error) {
    console.error("Error al obtener tostado:", error);
  }
}

