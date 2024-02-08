import React, { useState } from 'react';
import Modal from './Modal';
import ProductsList from './ProductsList';
import { useAuth } from "../context/AuthContext.jsx";
// Importa tu imagen de fondo
import backgroundImage from '../img/fondoGiga.jpg'; 

export function Home() {
  const { logout, user } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error(error.message);
    }
  };

  const toggleModal = () => setIsModalOpen(!isModalOpen);

  return (
    // Establece la imagen de fondo aquí
    <div className="w-full h-full min-h-screen bg-cover bg-center text-black" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="flex justify-between items-start p-4">
        {/* Contenedor para el mensaje de bienvenida y botón de cerrar sesión */}
        <div className="bg-gray-100 p-4 rounded opacity-90">
          <p className="text-xl"><strong>Bienvenido,</strong> {user.displayName || user.email}</p>
        </div>
        <button
          className="bg-red-500 hover:bg-red-600 rounded py-2 px-4 text-white"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </div>
      <div className="flex justify-center p-4">
        {/* Botón de Añadir Nuevo Producto centrado */}
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={toggleModal}
        >
          Añadir Nuevo Producto
        </button>
      </div>
      {isModalOpen && <Modal onClose={toggleModal} />}
      <ProductsList />
    </div>
  );
}
