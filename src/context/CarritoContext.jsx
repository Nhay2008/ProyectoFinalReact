import React, { createContext, useState } from 'react';

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState('');

  const agregarProducto = (producto) => {
    setCarrito((prev) => [...prev, producto]);
    setMensaje(`✅ ${producto.nombre || producto.name} agregado al carrito.`);
    setTimeout(() => setMensaje(''), 3000);
  };

  const eliminarProducto = (id) => {
    setCarrito((prev) => prev.filter(p => p.id !== id));
    setMensaje(`❌ Producto eliminado del carrito.`);
    setTimeout(() => setMensaje(''), 3000);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
    setMensaje('🗑️ El carrito ha sido vaciado.');
    setTimeout(() => setMensaje(''), 3000);
  };

  const total = carrito.reduce((acc, p) => acc + (p.precio || 0), 0);

  return (
    <CarritoContext.Provider value={{
      carrito,
      agregarProducto,
      eliminarProducto,
      vaciarCarrito,
      total,
      mensaje
    }}>
      {children}
    </CarritoContext.Provider>
  );
};