/* eslint-disable react-refresh/only-export-components */
import { ActionFunctionArgs, Form, Link, redirect } from "react-router-dom";
import { ClockIcon, ListBulletIcon } from "@heroicons/react/24/outline";
import { CrearNuevoReposo } from "../services/Reposo";

export async function action({ request, params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  let error = "";

  if (Object.values(data).includes("")) {
    error = "Error";
  }
  if (error.length) {
    return error;
  }

  console.log("REQUEST", request);
  console.log("DATA DEL FORUMUASKDSAL", params);

  if (params.id !== undefined) {
    await CrearNuevoReposo(data, +params.id);
  }
  return redirect("/nuevatrazabilidad");
}

export default function Rest() {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-black text-slate-700">3 | Reposo</h1>
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
          {/* Tiempo de Reposo */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <ClockIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label className="text-gray-800 font-semibold" htmlFor="tiempoReposo">
                Tiempo de Reposo
              </label>
            </div>
            <input
              id="tiempoReposo"
              type="number"
              className="block w-full p-3 bg-gray-50 border rounded-md"
              name="tiempoReposo"
              placeholder="Escribe el tiempo de reposo en horas"
            />
          </div>

          {/* Cantidad de MP - Post Perdida */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <ListBulletIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label className="text-gray-800 font-semibold" htmlFor="cantidadPerdida">
                Cantidad de MP - Post Perdida (kg)
              </label>
            </div>
            <input
              id="cantidadPerdida"
              type="number"
              className="block w-full p-3 bg-gray-50 border rounded-md"
              name="cantidadPerdida"
              placeholder="Escribe la cantidad en kg"
            />
          </div>
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-blue-900 p-3 text-white font-bold text-lg cursor-pointer rounded"
          value="Pasar al Análisis"
        />
      </Form>
    </>
  );
}
