/* eslint-disable react-refresh/only-export-components */
import { Link, useLoaderData} from "react-router-dom";
import { verTrazabilidad } from "../services/Trazabilidad";
import { TRAZABILIDAD } from "../schemas";
import TrazabilidadDetails from "../components/TrazabilidadDetails";


export async function loader(){
  const trazable = await verTrazabilidad()

  return trazable
}

export default function Sistemadetrazabilidad() {

  const trazable = useLoaderData() as TRAZABILIDAD[]

  return (
    <>
      {/* Título y botón */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-700">
          Sistema de Trazabilidad
        </h1>
        <Link
          to={"/trazabilidad/inicio"}
          className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-500 transition-all"
        >
          + Nueva Trazabilidad
        </Link>
      </div>

      {/* Tabla de trazabilidad */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 font-medium text-center">Lote de Producción</th>
              <th className="p-3 font-medium text-center">Lote de Recepción</th>
              <th className="p-3 font-medium text-center">Variedad</th>
              <th className="p-3 font-medium text-center">Cantidad (kg)</th>
              <th className="p-3 font-medium text-center">Fecha de Inicio</th>
              <th className="p-3 font-medium text-center">Estados</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {trazable.map((trazable) => (
              <TrazabilidadDetails key={trazable.id} trazable={trazable}  />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
