import { ActionFunctionArgs, useNavigate } from "react-router-dom";
import {TRAZABILIDAD } from "../schemas";
import { ObtenerTostadoPorId } from "../services/Tostadero";
import {useState } from "react"; // Importa useEffect y useState
import { ButtonColors } from "flowbite-react";

export type TrazabilidadDetailsProps = {
  trazable: TRAZABILIDAD,
};

export async function loader({ params }: ActionFunctionArgs) {
  if (params.id !== undefined) {
    const tostadero = await ObtenerTostadoPorId(+params.id);
    return tostadero;
  }
}

export default function TrazabilidadDetails({ trazable }: TrazabilidadDetailsProps) {
  const navigate = useNavigate();


  // Estado para el color de los botones
  const [buttonColors, setButtonColors] = useState(() => {
    const storedColors = localStorage.getItem('buttonColors');
    return storedColors ? JSON.parse(storedColors) : {
      iniciado: false,
      tostadero: false,
      reposo: false,
      analisis: false,
      embalaje: false,
    };
  });

  // Estado para controlar la visibilidad de los botones
  const [buttonsVisible, setButtonsVisible] = useState(true);

  // Función para cambiar el color de los botones
  const handleButtonClick = (buttonName: keyof typeof buttonColors) => {
    setButtonColors((prev: ButtonColors) => {
      const newColors = { ...prev, [buttonName]: true };
      localStorage.setItem('buttonColors', JSON.stringify(newColors));
      return newColors;
    });
  };
  

  const handleTostaderoClick = () => {
    handleButtonClick('tostadero');
    navigate(`/trazabilidad/tostadero/${trazable.id}`);
  };

  const handleReposoClick = () => {
    handleButtonClick('reposo');
    navigate(`/trazabilidad/reposo/${trazable.id}`);
  };

  const handleAnalisisClick = () => {
    handleButtonClick('analisis');
    navigate(`/trazabilidad/analisis/${trazable.id}`);
  };

  const handleEmbalajeClick = () => {
    handleButtonClick('embalaje');
    navigate(`/trazabilidad/embalaje/${trazable.id}`);
  };

  const handleFinalizarClick = () => {
    const confirmFinalizar = window.confirm("¿Estás seguro de que quieres finalizar?");
    if (confirmFinalizar) {
      setButtonsVisible(false); // Oculta los botones si el usuario confirma
    }
  };

  return (
    <>
      <tr className="border-b text-center">
        <td className="p-3 text-gray-800 font-semibold border-r">LP{trazable.id}</td>
        <td className="p-3 text-gray-800 font-semibold border-r">LR{trazable.LR1}</td>
        <td className="p-3 text-gray-800 font-semibold border-r">{trazable.materiaPrima.variedad}</td>
        <td className="p-3 text-gray-800 font-semibold border-r">{trazable.cantidadMP}</td>
        <td className="p-3 text-gray-800 font-semibold border-r">
          {trazable.fechaHoraInicio?.toLocaleDateString("es-AR", {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
          })}
        </td>
        <td className="p-3">
          <div className="flex justify-between gap-2">
            {buttonsVisible && (
              <>
                <button
                  className={`${
                    buttonColors.iniciado
                      ? "text-green-800 border border-green-800"
                      : "text-blue-800 border border-blue-600"
                  } rounded-lg w-full uppercase text-sm p-2 text-center font-semibold`}
                  onClick={() => handleButtonClick('iniciado')}
                >
                  Iniciado
                </button>
                <button
                  className={`${
                    buttonColors.tostadero
                      ? "text-green-800 border border-green-800"
                      : "text-gray-400 border border-gray-400"
                  } rounded-lg w-full uppercase text-sm p-2 text-center font-semibold`}
                  onClick={handleTostaderoClick}
                >
                  Tostadero
                </button>
                <button
                  className={`${
                    buttonColors.reposo
                      ? "text-green-800 border border-green-800"
                      : "text-gray-400 border border-gray-400"
                  } rounded-lg w-full uppercase text-sm p-2 text-center font-semibold`}
                  onClick={handleReposoClick}
                >
                  Reposo
                </button>
                <button
                  className={`${
                    buttonColors.analisis
                      ? "text-green-800 border border-green-800"
                      : "text-gray-400 border border-gray-400"
                  } rounded-lg w-full uppercase text-sm p-2 text-center font-semibold`}
                  onClick={handleAnalisisClick}
                >
                  Análisis
                </button>
                <button
                  className={`${
                    buttonColors.embalaje
                      ? "text-green-800 border border-green-800"
                      : "text-gray-400 border border-gray-400"
                  } rounded-lg w-full uppercase text-sm p-2 text-center font-semibold`}
                  onClick={handleEmbalajeClick}
                >
                  Embalaje
                </button>
              </>
            )}
            <button
              className="text-blue-600 border border-blue-600 rounded-lg w-full uppercase text-sm p-2 text-center font-semibold"
              onClick={handleFinalizarClick}
            >
              Finalizar
            </button>
          </div>
        </td>
      </tr>
    </>
  );
}
