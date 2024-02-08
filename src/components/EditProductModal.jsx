// src/components/EditProductModal.jsx
import React, { useState, useEffect } from 'react';
import './styles.css'; // Ajusta la ruta según sea necesario

function EditProductModal({ isOpen, onClose, product, onSave }) {
  const [productName, setProductName] = useState('');
  const [productCode, setProductCode] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    if (product) {
      setProductName(product.productName);
      setProductCode(product.productCode);
      setPrice(product.price);
    }
  }, [product]);

  const handleSave = () => {
    onSave(product.id, { productName, productCode, price });
    onClose(); // Cierra el modal después de guardar
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop">
        <div className="modal">
            <h2>Editar Producto</h2>
            <div className="form-group">
            <label htmlFor="productName">Nombre del Producto</label>
            <input
                id="productName"
                type="text"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                placeholder="Nombre del Producto"
            />
            </div>
            <div className="form-group">
            <label htmlFor="productCode">Código del Producto</label>
            <input
                id="productCode"
                type="text"
                value={productCode}
                onChange={(e) => setProductCode(e.target.value)}
                placeholder="Código del Producto"
            />
            </div>
            <div className="form-group">
            <label htmlFor="price">Precio</label>
            <input
                id="price"
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Precio"
            />
            </div>
            <button className="btn-save" onClick={handleSave}>Guardar Cambios</button>
            <button className="btn-cancel" onClick={onClose}>Cancelar</button>
        </div>
    </div>
  );
}

export default EditProductModal;
