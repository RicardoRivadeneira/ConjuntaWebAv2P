import React, { useState } from 'react';
import { getDatabase, ref, push } from 'firebase/database';

function Modal({ onClose }) {
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [price, setPrice] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!productName.trim() || !productCode.trim() || !price.trim()) {
      alert("Todos los campos son obligatorios");
      return;
    }

    try {
      const db = getDatabase();
      await push(ref(db, 'products'), {
        productName,
        productCode,
        price: Number(price),
      });

      setShowSuccessMessage(true);
      setTimeout(() => setShowSuccessMessage(false), 3000); // Mensaje desaparece después de 3 segundos

      setProductName('');
      setProductCode('');
      setPrice('');
      onClose(); // Opcional: Cierra el modal después de añadir el producto
    } catch (error) {
      console.error("Error añadiendo el producto: ", error);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-4 rounded-lg">
        <h2 className="text-lg font-bold">Añadir Nuevo Producto</h2>
        {showSuccessMessage && (
          <div className="text-green-500">Producto agregado correctamente</div>
        )}
        <form onSubmit={handleSubmit}>
          <input
            className="block w-full p-2 border rounded my-2"
            type="text"
            placeholder="Nombre del Producto"
            value={productName}
            onChange={(e) => setProductName(e.target.value)}
            required
          />
          <input
            className="block w-full p-2 border rounded my-2"
            type="text"
            placeholder="Código del Producto"
            value={productCode}
            onChange={(e) => setProductCode(e.target.value)}
            required
          />
          <input
            className="block w-full p-2 border rounded my-2"
            type="number"
            placeholder="Precio"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              onClick={onClose}
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Añadir
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Modal;
