/* eslint-disable react-refresh/only-export-components */
import { Form, Link, redirect } from "react-router-dom";
import { ClockIcon, ListBulletIcon } from "@heroicons/react/24/outline";

export async function action() {
  return redirect("/nuevatrazabilidad");
}

export default function Analisis() {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-black text-slate-700">4 | Análisis</h1>
        <Link
          to={"/"}
          className="bg-blue-900 text-white text-sm font-semibold p-3 rounded-md"
        >
          ← Volver al inventario
        </Link>
      </div>

      <p className="mb-2">
        Procesando 3kg de <span className="font-semibold">Café Arábica</span>
      </p>

      <Form className="mt-10" method="POST">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Notas de Cata */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <ClockIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label className="text-gray-800 font-semibold" htmlFor="cuppingNotes">
                Notas de Cata
              </label>
            </div>
            <input
              id="cuppingNotes"
              type="text"
              className="block w-full p-3 bg-gray-50 border rounded-md"
              name="cuppingNotes"
              placeholder="Escribe tus notas de cata aquí"
            />
          </div>

          {/* Perfil del Café */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <ListBulletIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label className="text-gray-800 font-semibold" htmlFor="roastProfile">
                Perfil del Café
              </label>
            </div>
            <input
              id="roastProfile"
              type="text"
              className="block w-full p-3 bg-gray-50 border rounded-md"
              name="roastProfile"
              placeholder="Ejemplo: medio, oscuro, claro"
            />
          </div>
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-blue-900 p-3 text-white font-bold text-lg cursor-pointer rounded"
          value="Pasar al Embalaje"
        />
      </Form>
    </>
  );
}
