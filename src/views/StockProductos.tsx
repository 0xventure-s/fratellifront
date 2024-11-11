import StockDetaisl from "../components/StockProductosDetails";

export default function StockProductos() {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-700">
          Stock de Productos
        </h1>
      </div>

      <div className="flex justify-center p-2 gap-2">
        <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-x-auto w-full max-w-6xl mt-5">
          <table className="w-full min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="p-3 font-medium text-center rounded-l-md">Lote de empaquetado</th>
                <th className="p-3 font-medium text-center">Lote de Recepción</th>
                <th className="p-3 font-medium text-center">Lote de Producción</th>
                <th className="p-3 font-medium text-center">Variedad</th>
                <th className="p-3 font-medium text-center">0.25kg</th>
                <th className="p-3 font-medium text-center">0.50kg</th>
                <th className="p-3 font-medium text-center">1kg</th>
                <th className="p-3 font-medium text-center">3kg</th>
                <th className="p-3 font-medium text-center rounded-r-md">Acciones</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <StockDetaisl />
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
