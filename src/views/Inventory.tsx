import { Link, useLoaderData } from "react-router-dom";
import { VerMateriaPrima } from "../services/NuevaMateriaPrima";
import { MATERIA } from "../schemas";
import InventoryDetails from "../components/InventoryDetails";

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const materia = await VerMateriaPrima();
  return materia;
}

export default function Inventory() {
  const materia = useLoaderData() as MATERIA[];

  // Generación de datos aleatorios para las estadísticas
  const totalProductos = Math.floor(Math.random() * 1000);
  const valorInventario = (Math.random() * 10000).toFixed(2); // Valor en un rango de 0 a 10,000
  const lotesProduccion = Math.floor(Math.random() * 50);
  const clientesActivos = Math.floor(Math.random() * 200);

  return (
    <>
      {/* Sección de tarjetas con estadísticas */}
      <div className="grid grid-cols-4 gap-4 mb-6">
        <div className="bg-white shadow-sm p-4 rounded-lg text-center border border-gray-200">
          <h2 className="text-gray-400 text-sm font-medium">Total Productos</h2>
          <p className="text-3xl font-semibold text-blue-600">
            {totalProductos}
          </p>
          <p className="text-green-500 text-xs mt-1">
            +{Math.floor(Math.random() * 10)}% desde el último mes
          </p>
        </div>

        <div className="bg-white shadow-sm p-4 rounded-lg text-center border border-gray-200">
          <h2 className="text-gray-400 text-sm font-medium">
            Valor del Inventario
          </h2>
          <p className="text-3xl font-semibold text-green-600">
            ${valorInventario}
          </p>
          <p className="text-green-500 text-xs mt-1">
            +{Math.floor(Math.random() * 10)}% desde el último mes
          </p>
        </div>

        <div className="bg-white shadow-sm p-4 rounded-lg text-center border border-gray-200">
          <h2 className="text-gray-400 text-sm font-medium">
            Lotes en Producción
          </h2>
          <p className="text-3xl font-semibold text-yellow-500">
            {lotesProduccion}
          </p>
          <p className="text-red-500 text-xs mt-1">
            -{Math.floor(Math.random() * 10)} desde la semana pasada
          </p>
        </div>

        <div className="bg-white shadow-sm p-4 rounded-lg text-center border border-gray-200">
          <h2 className="text-gray-400 text-sm font-medium">
            Clientes Activos
          </h2>
          <p className="text-3xl font-semibold text-purple-600">
            {clientesActivos}
          </p>
          <p className="text-green-500 text-xs mt-1">
            +{Math.floor(Math.random() * 5)} nuevos esta semana
          </p>
        </div>
      </div>

      {/* Título y botón */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-700">
          Inventario de Materia Prima
        </h1>
        <Link
          to={"/nuevamateriaprima"}
          className="bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-blue-500 transition-all"
        >
          + Agregar Materia Prima
        </Link>
      </div>

      {/* Tabla de inventario */}
      <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-x-auto">
        <table className="w-full min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-600">
            <tr>
              <th className="p-3 font-medium text-center">Variedad</th>
              <th className="p-3 font-medium text-center">Lote de Recepción</th>
              <th className="p-3 font-medium text-center">Cantidad (kg)</th>
              <th className="p-3 font-medium text-center">Fecha Recibido</th>
              <th className="p-3 font-medium text-center">Lote</th>
              <th className="p-3 font-medium text-center">Acciones</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {materia?.map((materias) => (
              <InventoryDetails key={materias.id} materias={materias} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
