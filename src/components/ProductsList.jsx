// src/components/ProductsList.jsx
import React, { useEffect, useState } from 'react';
import { db } from '../firabase';
import { ref, onValue, remove, update } from 'firebase/database';
import EditProductModal from './EditProductModal'; // Asegúrate de tener este componente

function ProductsList() {
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    const productsRef = ref(db, 'products/');
    onValue(productsRef, (snapshot) => {
      const data = snapshot.val();
      const productsList = data ? Object.keys(data).map(key => ({
        id: key,
        ...data[key]
      })) : [];
      setProducts(productsList);
    });
  }, []);

  const handleDelete = (productId) => {
    remove(ref(db, `products/${productId}`));
  };

  const handleEdit = (productId, updatedProduct) => {
    update(ref(db, `products/${productId}`), updatedProduct);
  };

  const openEditModal = (product) => {
    setCurrentProduct(product);
    setIsModalOpen(true);
  };

  return (
    <div className="flex justify-center min-h-screen">
      <div className="h-830 ">
        <div className="font-bold text-lg mb-4 p-5">Productos</div>
        <div className="overflow-x-auto">
          <div className="align-middle inline-block min-w-full">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <div className="bg-gray-50 px-6 py-3 grid grid-cols-4 gap-4 text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                <div>Producto</div>
                <div>Código</div>
                <div>Precio</div>
                <div>Acciones</div>
              </div>
              <div className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                  <div key={product.id} className="px-6 py-4 grid grid-cols-4 gap-4">
                    <div>{product.productName}</div>
                    <div>{product.productCode}</div>
                    <div>${product.price}</div>
                    <div className="flex justify-around">
                      <button onClick={() => openEditModal(product)} className="text-indigo-600 hover:text-indigo-900">Editar</button>
                      <button onClick={() => handleDelete(product.id)} className="text-red-600 hover:text-red-900">Eliminar</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Aquí se renderizará el modal, asumiendo que su visibilidad se controla internamente */}
        <EditProductModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          product={currentProduct}
          onSave={handleEdit}
        />
      </div>
    </div>
  );
}

export default ProductsList;