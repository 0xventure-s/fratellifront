/* eslint-disable react-refresh/only-export-components */
import { ActionFunctionArgs, Form, Link, redirect } from "react-router-dom";
import {
  TagIcon,
  ClipboardIcon,
  ClockIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline"; // Importa los íconos necesarios
import { CrearNuevaMateriaPrima } from "../services/NuevaMateriaPrima";

export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  let error = "";

  if(Object.values(data).includes("")) {
    error = "Peluca Sape"
  }
  if(error.length) {
    return error;
  }

  await CrearNuevaMateriaPrima(data)
  return redirect("/")
}



export default function NewMP() {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-black text-slate-700">
          Agregar Nueva Materia Prima
        </h1>
        <Link
          to={"/"}
          className="bg-blue-900 text-white text-sm font-semibold p-3 rounded-md"
        >
          ← Volver al inventario
        </Link>
      </div>
      <p className="mb-2 text-gray-600">
        El lote de Recepción se generará automáticamente.
      </p>
      <p className="mb-6">
        Ingresa los detalles de la nueva materia prima para agregarla al
        inventario.
      </p>
      
      <Form className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10" method="POST">
        <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <TagIcon className="h-6 w-6 text-gray-800 mr-2" /> {/* Ícono de Lote Nro */}
            <label className="text-gray-800 font-semibold" htmlFor="lote">
              Lote Nro:
            </label>
          </div>
          <input
            id="lote"
            type="text"
            className="block w-full p-3 bg-gray-50 border rounded-md"
            placeholder="Número de Lote"
            name="lote"
          />
        </div>

        <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-800 mr-2" /> {/* Ícono de Variedad */}
            <label className="text-gray-800 font-semibold" htmlFor="variedad">
              Variedad:
            </label>
          </div>
          <input
            id="variedad"
            type="text"
            className="block w-full p-3 bg-gray-50 border rounded-md"
            placeholder="Nombre de la Variedad"
            name="variedad"
          />
        </div>

        <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <ClipboardIcon className="h-6 w-6 text-gray-800 mr-2" /> {/* Ícono de Cantidad */}
            <label className="text-gray-800 font-semibold" htmlFor="cantidad">
              Cantidad (kg):
            </label>
          </div>
          <input
            id="cantidad"
            type="number"
            className="block w-full p-3 bg-gray-50 border rounded-md"
            placeholder="Cantidad en kg"
            name="cantidad"
          />
        </div>

        <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <ClockIcon className="h-6 w-6 text-gray-800 mr-2" /> {/* Ícono de Fecha y Hora */}
            <label className="text-gray-800 font-semibold" htmlFor="fechadeentrega">
              Fecha y Hora de entrega:
            </label>
          </div>
          <input
            id="fechadeentrega"
            type="date"
            className="block w-full p-3 bg-gray-50 border rounded-md"
            name="fechadeentrega"
          />
        </div>

        <div className="col-span-1 md:col-span-2">
          <input
            type="submit"
            className="w-full bg-blue-900 p-3 text-white font-bold text-lg cursor-pointer rounded"
            value="Agregar Materia Prima"
          />
        </div>
      </Form>
    </>
  );
}
