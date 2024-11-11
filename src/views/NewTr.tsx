import {
  ActionFunctionArgs,
  Form,
  Link,
  redirect,
  useLoaderData,
} from "react-router-dom";
import {
  ClipboardIcon,
  ClockIcon,
  CubeIcon,
} from "@heroicons/react/24/outline"; // Importa los íconos necesarios
import { VerMateriaPrima } from "../services/NuevaMateriaPrima";
import { MATERIA } from "../schemas";
import { CrearNuevaTrazabilidad } from "../services/Trazabilidad";

// eslint-disable-next-line react-refresh/only-export-components
export async function action({ request }: ActionFunctionArgs) {
  const data = Object.fromEntries(await request.formData());

  let error = "";

  if (Object.values(data).includes("")) {
    error = "Peluca Sape";
  }
  if (error.length) {
    return error;
  }
  console.log("DATA DEL FORUMUASKDSAL", data);

  await CrearNuevaTrazabilidad(data);
  return redirect("/nuevatrazabilidad");
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const materia = await VerMateriaPrima();
  return materia;
}

export default function NewTr() {
  const materia = useLoaderData() as MATERIA[];

  return (
    <>
      <div className="flex justify-between mb-6">
        <h1 className="text-4xl font-black text-slate-700">
          1 | Iniciar Trazabilidad
        </h1>
        <Link
          to={"/nuevatrazabilidad"}
          className="bg-blue-900 text-white text-sm font-semibold p-3 rounded-md"
        >
          ← Volver al inventario
        </Link>
      </div>
      <p className="mb-2"></p>

      <Form className="mt-10" method="POST">
        <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200">
          <div className="flex items-center mb-2">
            <ClipboardIcon className="h-6 w-6 text-gray-800 mr-2" />{" "}
            {/* Ícono de Cantidad */}
            <label className="text-gray-800 font-semibold" htmlFor="cantidad">
              Cantidad a utilizar (kg):
            </label>
          </div>
          <p className="text-sm mb-2">
            Esta cantidad se descontará de tu inventario de Materia Prima
          </p>
          <input
            id="cantidadMP"
            type="number"
            className="block w-full p-3 bg-gray-50 border rounded-md"
            placeholder="Cantidad en kg"
            name="cantidadMP"
          />
        </div>

        <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200 mt-4">
          <div className="flex items-center mb-2">
            <ClockIcon className="h-6 w-6 text-gray-800 mr-2" />{" "}
            {/* Ícono de Fecha y Hora */}
            <label
              className="text-gray-800 font-semibold"
              htmlFor="fechaHoraInicio"
            >
              Fecha y Hora de inicio:
            </label>
          </div>
          <input
            id="fechaHoraInicio"
            type="datetime-local"
            className="block w-full p-3 bg-gray-50 border rounded-md"
            name="fechaHoraInicio"
          />
        </div>

        {/* Selección de Materia Prima */}
        <div className="bg-white shadow-sm p-4 rounded-lg border border-gray-200 mt-4">
          <div className="flex items-center mb-2">
            <CubeIcon className="h-6 w-6 text-gray-800 mr-2" />
            <label
              className="text-gray-800 font-semibold"
              htmlFor="materiaPrima"
            >
              Selecciona la Materia Prima:
            </label>
          </div>
          <select
            id="materiaPrima"
            name="LR1" // Asegúrate de que este nombre sea el correcto para tu backend
            className="block w-full p-3 bg-gray-50 border rounded-md"
          >
            <option value="">Selecciona una materia prima</option>
            {materia?.map((item) => (
              <option key={item.id} value={item.id}>
                Variedad: {item.variedad} - LR{item.id} - Kg Disponibles:{" "}
                {item.cantidad}
                {/* Cambia los nombres de las propiedades según tu esquema */}
              </option>
            ))}
          </select>
        </div>

        <input
          type="submit"
          className="mt-5 w-full bg-blue-900 p-3 text-white font-bold text-lg cursor-pointer rounded"
          value="Iniciar Trazabilidad"
        />
      </Form>
    </>
  );
}
