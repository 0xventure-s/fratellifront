import { MATERIA } from "../schemas";

export type InventoryDetailsProps = {
  materias: MATERIA;
};

export default function InventoryDetails({ materias }: InventoryDetailsProps) {
  return (
    <>
      <tr className="border-b text-center">
        <td className="p-3 text-lg text-gray-800 font-semibold border-r">
          {materias.variedad}
        </td>
        <td className="p-3 text-gray-800 font-semibold border-r">
          LR{materias.id}
        </td>
        <td className="p-3 text-gray-800 font-semibold border-r">
          {materias.cantidad}
        </td>
        <td className="p-3 text-gray-800 font-semibold border-r">
          {/* Formatear la fecha antes de mostrarla */}
          {materias.fechadeentrega.toLocaleDateString("es-AR", {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </td>
        <td className="p-3 text-gray-800 font-semibold border-r">
          {materias.lote}
        </td>
        <td className="p-3">
          <div className="flex justify-center gap-2">
            <button className="text-blue-600 hover:underline">Editar</button>
            <button className="text-red-600 hover:underline ml-2">Eliminar</button>
          </div>
        </td>
      </tr>
    </>
  );
}
