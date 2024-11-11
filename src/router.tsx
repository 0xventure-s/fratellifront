import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import Inventory, { loader, loader as NewTrLoader } from "./views/Inventory";
import NewMP, { action as NewMateriaPrima } from "./views/NewMP";
import NewTr, { action as NewTrAction } from "./views/NewTr";
import Tostadero, { action as NewTostaderoAction } from "./views/Tostadero";
import Rest, { action as newRestAction } from "./views/Rest";
import Analisis, { action as NewAnalisisAction } from "./views/Analisis";
import Embalaje from "./views/Embalaje";
import Sistemadetrazabilidad, {
  loader as nuevatrazabilidadLoader,
} from "./views/Sistemadetrazabilidad";
import StockProductos from "./views/StockProductos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        index: true,
        element: <Inventory />,
        loader: loader,
      },
      {
        path: "/nuevamateriaprima",
        element: <NewMP />,
        action: NewMateriaPrima,
      },
      {
        path: "/nuevatrazabilidad",
        element: <Sistemadetrazabilidad />,
        loader: nuevatrazabilidadLoader,
      },

      {
        path: "/stockproductos",
        element: <StockProductos />,
      },
      {
        path: "/trazabilidad/inicio",
        element: <NewTr />,
        action: NewTrAction,
        loader: NewTrLoader,
      },
      {
        path: "/trazabilidad/tostadero/:id",
        element: <Tostadero />,
        action: NewTostaderoAction,
      },
      {
        path: "/trazabilidad/reposo/:id",
        element: <Rest />,
        action: newRestAction,
      },
      {
        path: "/trazabilidad/analisis/:id",
        element: <Analisis />,
        action: NewAnalisisAction,
      },
      {
        path: "/trazabilidad/embalaje/:id",
        element: <Embalaje />,
      },
    ],
  },
]);

export default router;
