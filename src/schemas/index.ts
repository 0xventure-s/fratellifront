import { array, date, InferOutput, number, object, string } from "valibot";

export const DraftProductSchema = object({
  lote: string(),
  variedad: string(),
  cantidad: number(),
  fechadeentrega: date(),
});

export const NuevaMateriaPrima = object({
  id: number(),
  lote: string(),
  variedad: string(),
  cantidad: number(),
  fechadeentrega: date(),
});

export const NuevaMateriasPrima = array(NuevaMateriaPrima);
export type MATERIA = InferOutput<typeof NuevaMateriaPrima>;

export const TrazabilidadSchema = object({
  cantidadMP: number(),
  LR1: number(),
  fechaHoraInicio: date(),
});

export const TRANS = object({
  id: number(),
  cantidadMP: number(),
  LR1: number(),
  fechaHoraInicio: date(),
  materiaPrima: object({
    // Agrega materiaPrima con solo el campo variedad
    variedad: string(), // Hacemos que sea opcional por si no existe
  }),
});

export const TrazabilidadSchemas = array(TRANS);

export type TRAZABILIDAD = InferOutput<typeof TRANS>;



export const TostadoSchema = object({
  inicioTrazabilidadId: number(),  
  fechaHoraTostado: date(),       
  tipoDeTostado: string(),
  temperatura: number(),
  humedad: number(),
  tiempoDeTostado: number(),
});

export const TostadoSchemas = object({
  id:number(),
  inicioTrazabilidadId: number(),  
  fechaHoraTostado: date(),       
  tipoDeTostado: string(),
  temperatura: number(),
  humedad: number(),
  tiempoDeTostado: number(),
});

export type TOSTADERO = InferOutput<typeof TostadoSchemas>


export const ReposoSchema = object({
  inicioTrazabilidadId: number(),
  cantidadPerdida:number(),
  tiempoReposo:number()
})

export const ReposoSchemas = object({
  id:number(),
  inicioTrazabilidadId: number(),
  cantidadPerdida:number(),
  tiempoReposo:number()
})

export type REPOSO = InferOutput<typeof ReposoSchemas>