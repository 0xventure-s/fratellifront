import { useState } from "react";

export default function StockDetails() {
  const [modalVisible, setModalVisible] = useState(false);

  const trazabilidadData = {
    loteRecepcion: {
      LR1: "LR1",
      variedad: "Arábico",
      fechaRecibimiento: "30/10/2024",
    },
    loteProduccion: {
      LP: "LP1",
      tipoTostado: "Medio",
      tiempoTostado: "1 hora",
      temperatura: "180 grados",
      humedad: "10%",
    },
    tiempoReposo: "4 horas",
    analisis: {
      notasCata: "Sabor dulce y a madera",
      perfilCafe: "Amaderado",
    },
    embalaje: {
      fechaEmbalaje: "31/10/2024",
    },
  };

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  // URL para el código QR
  const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=/trazabilidadfratelli&size=128x128`;

  return (
    <>
      <tr className="border-b text-center">
        <td className="p-3 text-gray-800 font-semibold border-r">LE1</td>
        <td className="p-3 text-gray-800 font-semibold border-r">LR1</td>
        <td className="p-3 text-gray-800 font-semibold border-r">LP1</td>
        <td className="p-3 text-gray-800 font-semibold border-r">Café Arábico</td>
        <td className="p-3 text-gray-800 font-semibold border-r">1</td>
        <td className="p-3 text-gray-800 font-semibold border-r">5</td>
        <td className="p-3 text-gray-800 font-semibold border-r">3</td>
        <td className="p-3 text-gray-800 font-semibold border-r">1</td>
        <td className="p-3">
          <div className="flex justify-between gap-2">
            <button className="text-blue-600 hover:underline">Editar</button>
            <button className="text-red-600 hover:underline ml-2">Eliminar</button>
            <button
              className="text-gray-800 border rounded-md w-full text-xs p-2 font-medium transition-all hover:bg-gray-100"
              onClick={handleOpenModal} // Abre el modal
            >
              Ver Trazabilidad
            </button>
          </div>
        </td>
      </tr>

      {/* Modal */}
      {modalVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-5 w-96">
            <h2 className="text-lg font-semibold mb-4">Trazabilidad</h2>
            <div className="mb-4">
              <h3 className="font-bold">Lote de Recepción:</h3>
              <p>Lote: {trazabilidadData.loteRecepcion.LR1}</p>
              <p>Variedad: {trazabilidadData.loteRecepcion.variedad}</p>
              <p>Fecha de Recibimiento: {trazabilidadData.loteRecepcion.fechaRecibimiento}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Lote de Producción:</h3>
              <p>Lote: {trazabilidadData.loteProduccion.LP}</p>
              <p>Tipo de Tostado: {trazabilidadData.loteProduccion.tipoTostado}</p>
              <p>Tiempo de Tostado: {trazabilidadData.loteProduccion.tiempoTostado}</p>
              <p>Temperatura: {trazabilidadData.loteProduccion.temperatura}</p>
              <p>Humedad: {trazabilidadData.loteProduccion.humedad}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Tiempo de Reposo:</h3>
              <p>{trazabilidadData.tiempoReposo}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Análisis:</h3>
              <p>Notas de cata: {trazabilidadData.analisis.notasCata}</p>
              <p>Perfil del Café: {trazabilidadData.analisis.perfilCafe}</p>
            </div>
            <div className="mb-4">
              <h3 className="font-bold">Embalaje:</h3>
              <p>Fecha de embalaje: {trazabilidadData.embalaje.fechaEmbalaje}</p>
            </div>
            {/* Código QR como imagen */}
            <div className="flex flex-col items-center mt-4">
              <img src={qrCodeURL} alt="Código QR" className="mb-2" />
              <a
                href="/trazabilidadfratelli"
                className="text-blue-600 hover:underline mt-2"
              >
                Descargar
              </a>
            </div>
            <button
              className="mt-4 text-red-600 hover:underline"
              onClick={handleCloseModal} // Cierra el modal
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
