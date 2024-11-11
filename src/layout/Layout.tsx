import { Outlet, Link, useLocation } from "react-router-dom";
import Logo from "../components/Logo";
import {
  CubeIcon,
  ClipboardDocumentCheckIcon,
  CubeTransparentIcon,
  ChartBarSquareIcon,
  Cog8ToothIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";

const todayDate = new Date().toLocaleDateString("es-ES", {
  weekday: "long",
  day: "numeric",
  month: "long",
  year: "numeric",
});

export default function Layout() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      {/* Header */}
      <header className="bg-blue-950 p-4">
        <div className="flex justify-center mx-20 text-white font-medium first-letter:uppercase">
          <span>{todayDate}</span>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="flex h-screen">
        {/* Sidebar */}
        <aside className="flex flex-col justify-between pt-10 w-56 bg-white shadow-md border-r">
          <div className="px-4 py-6">
            {/* Logo Placeholder */}
            <span className="grid h-10 w-32 place-content-center rounded-lg items-center text-xs mb-8">
              <div className="w-44 ml-8 mb-8">
                <Logo />
              </div>
            </span>

            {/* Navigation Links */}
            <ul className="space-y-1">
              <li>
                <Link
                  to="/"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${
                    isActive("/") ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  <CubeIcon className="h-5 w-5 mr-2" />
                  Materia Prima
                </Link>
              </li>
              <li>
                <Link
                  to="/stockproductos"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${
                    isActive("/stockproductos") ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  <ClipboardDocumentCheckIcon className="h-5 w-5 mr-2" />
                  Productos
                </Link>
              </li>
              <li>
                <Link
                  to="/nuevatrazabilidad"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${
                    isActive("/nuevatrazabilidad") ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  <CubeTransparentIcon className="h-5 w-5 mr-2" />
                  Trazabilidad
                </Link>
              </li>
              <li>
                <Link
                  to="/clientes"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${
                    isActive("/clientes") ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  <UserGroupIcon className="h-5 w-5 mr-2" />
                  Clientes
                </Link>
              </li>
              <li>
                <Link
                  to="/reportes"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${
                    isActive("/reportes") ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  <ChartBarSquareIcon className="h-5 w-5 mr-2" />
                  Reportes
                </Link>
              </li>
              <li>
                <Link
                  to="/configuracion"
                  className={`flex items-center rounded-lg px-4 py-2 text-sm font-medium ${
                    isActive("/configuracion") ? "bg-gray-100 text-gray-700" : "text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                  }`}
                >
                  <Cog8ToothIcon className="h-5 w-5 mr-2" />
                  Configuración
                </Link>
              </li>
            </ul>
          </div>

          {/* User Profile Section */}
          <div className="border-t border-gray-100 p-4 pb-10 flex flex-col">
            <a
              href="#"
              className="flex items-center gap-2 p-4 hover:bg-gray-50 rounded-lg"
            >
              <img alt="User" src="./vision.png" className="size-32" />
            </a>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-1 w-full">
          <div className="max-w-6xl mx-auto py-20">
            <Outlet />
          </div>
        </main>
      </div>
    </>
  );
}
