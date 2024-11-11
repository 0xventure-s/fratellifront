import { Form, Link } from "react-router-dom";
import { ClipboardDocumentCheckIcon, ClockIcon} from "@heroicons/react/24/outline";

export default function Embalaje() {
  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-black text-slate-700">5 | Embalaje</h1>
        <Link
          to={"/"}
          className="bg-blue-900 text-white text-sm font-semibold p-3 rounded-md"
        >
          ← Volver al inventario
        </Link>
      </div>

      <p className="mb-4">
        Procesando 3kg de <span className="font-semibold">Café Arábica</span>
      </p>

      <Form className="mt-10" method="POST">
        {/* Fecha y Hora de Embalaje */}
        <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200 mb-5">
          <div className="flex items-center mb-3">
            <ClockIcon className="h-6 w-6 text-gray-800 mr-2" />
            <label
              className="text-gray-800 font-semibold"
              htmlFor="fechaHoraEmbalaje"
            >
              Fecha y Hora de Embalaje
            </label>
          </div>
          <input
            id="fechaHoraEmbalaje"
            type="datetime-local"
            className="block w-full p-3 bg-gray-50 border rounded-md"
            name="fechaHoraEmbalaje"
            required
          />
        </div>

        {/* Cantidades de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-2">
              <ClipboardDocumentCheckIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label
                className="text-gray-800 font-semibold"
                htmlFor="cantidad025"
              >
                Cantidad de Productos de 0.25kg
              </label>
            </div>
            <input
              id="cantidad025"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50 border rounded-md"
              name="cantidad025"
              placeholder="Escribe la cantidad"
              min="0"
            />
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-2">
              <ClipboardDocumentCheckIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label
                className="text-gray-800 font-semibold"
                htmlFor="cantidad050"
              >
                Cantidad de Productos de 0.50kg
              </label>
            </div>
            <input
              id="cantidad050"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50 border rounded-md"
              name="cantidad050"
              placeholder="Escribe la cantidad"
              min="0"
            />
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-2">
              <ClipboardDocumentCheckIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label
                className="text-gray-800 font-semibold"
                htmlFor="cantidad1"
              >
                Cantidad de Productos de 1kg
              </label>
            </div>
            <input
              id="cantidad1"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50 border rounded-md"
              name="cantidad1"
              placeholder="Escribe la cantidad"
              min="0"
            />
          </div>

          <div className="bg-white shadow-md rounded-lg p-5 border border-gray-200">
            <div className="flex items-center mb-2">
              <ClipboardDocumentCheckIcon className="h-6 w-6 text-gray-800 mr-2" />
              <label
                className="text-gray-800 font-semibold"
                htmlFor="cantidad3"
              >
                Cantidad de Productos de 3kg
              </label>
            </div>
            <input
              id="cantidad3"
              type="number"
              className="mt-2 block w-full p-3 bg-gray-50 border rounded-md"
              name="cantidad3"
              placeholder="Escribe la cantidad"
              min="0"
            />
          </div>
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-blue-900 p-3 text-white font-bold text-lg cursor-pointer rounded"
          value="Confirmar Embalaje"
        />
      </Form>
    </>
  );
}
