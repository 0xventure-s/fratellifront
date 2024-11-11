/* eslint-disable react-refresh/only-export-components */
import { ActionFunctionArgs, Form, Link, redirect } from "react-router-dom";
import {
  ClockIcon,
  FireIcon,
  AdjustmentsHorizontalIcon,
  ListBulletIcon,
} from "@heroicons/react/24/outline";


import { CrearNuevoTostado } from "../services/Tostadero";

export async function action({ request, params }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  let error = "";

  if (Object.values(data).includes("")) {
    error = "Error";
  }
  if (error.length) {
    return error;
  }

  if (params.id !== undefined) {
    await CrearNuevoTostado(data, +params.id);
  }
  return redirect("/nuevatrazabilidad");
}

export default function Tostadero() {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-black text-slate-700">2 | Tostadero</h1>
        <Link
          to={"/"}
          className="bg-blue-900 text-white text-sm font-semibold p-3 rounded-md"
        >
          ← Volver al inventario
        </Link>
      </div>

      <Form className="mt-10" method="POST">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Fecha y Hora de Tueste */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <ClockIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label
                className="text-gray-800 font-semibold"
                htmlFor="fechaHoraTostado"
              >
                Fecha y Hora de Tueste
              </label>
            </div>
            <input
              id="fechaHoraTostado"
              type="datetime-local"
              className="block w-full p-3 bg-gray-50 border rounded-md"
              name="fechaHoraTostado"
              placeholder="Selecciona fecha y hora"
            />
          </div>

          {/* Tipo de Tueste */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <ListBulletIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label
                className="text-gray-800 font-semibold"
                htmlFor="tipoDeTostado"
              >
                Tipo de Tueste
              </label>
            </div>
            <input
              id="tipoDeTostado"
              type="text"
              className="block w-full p-3 bg-gray-50 border rounded-md"
              name="tipoDeTostado"
              placeholder="Ejemplo: medio, oscuro, claro"
            />
          </div>

          {/* Temperatura */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <FireIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label
                className="text-gray-800 font-semibold"
                htmlFor="temperatura"
              >
                Temperatura
              </label>
            </div>
            <input
              id="temperatura"
              type="number"
              className="block w-full p-3 bg-gray-50 border rounded-md"
              name="temperatura"
              placeholder="Temperatura en grados Celsius"
            />
          </div>

          {/* Humedad */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-3">
              <AdjustmentsHorizontalIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label className="text-gray-800 font-semibold" htmlFor="humedad">
                Humedad
              </label>
            </div>
            <input
              id="humedad"
              type="number"
              className="block w-full p-3 bg-gray-50 border rounded-md"
              name="humedad"
              placeholder="Porcentaje de humedad"
            />
          </div>

          {/* Tiempo de Tostado */}
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 sm:col-span-2">
            <div className="flex items-center mb-3">
              <ClockIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label
                className="text-gray-800 font-semibold"
                htmlFor="tiempoDeTostado"
              >
                Tiempo de Tostado (En minutos)
              </label>
            </div>
            <input
              id="tiempoDeTostado"
              type="number"
              className="block w-full p-3 bg-gray-50 border rounded-md"
              name="tiempoDeTostado"
              placeholder="Tiempo total en la tostadora ej: 120 minutos"
            />
          </div>
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-blue-900 p-3 text-white font-bold text-lg cursor-pointer rounded"
          value="Guardar Datos"
        />
      </Form>
    </>
  );
}
