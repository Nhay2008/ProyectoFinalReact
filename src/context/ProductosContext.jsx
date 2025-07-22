import { createContext, useContext, useEffect, useState } from 'react';

const ProductosContext = createContext();
export const useProductos = () => useContext(ProductosContext);

const API_URL = 'https://687eab3eefe65e5200875092.mockapi.io/productos';

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState('');
  const [productoSeleccionado, setProductoSeleccionado] = useState(null);

  const cargarProductos = async () => {
    setCargando(true);
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error('Error al obtener productos');
      const data = await res.json();
      setProductos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setCargando(false);
    }
  };

  const agregarProducto = async (nuevoProducto) => {
    try {
      const res = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(nuevoProducto),
      });
      if (!res.ok) throw new Error('Error al agregar producto');
      const data = await res.json();
      setProductos((prev) => [...prev, data]);
    } catch (err) {
      alert('❌ Error al agregar producto');
    }
  };

  const actualizarProducto = async (producto) => {
    try {
      const res = await fetch(`${API_URL}/${producto.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(producto),
      });
      if (!res.ok) throw new Error('Error al actualizar');
      const data = await res.json();
      setProductos((prev) =>
        prev.map((p) => (p.id === data.id ? data : p))
      );
      setProductoSeleccionado(null);
    } catch (err) {
      alert('❌ Error al actualizar producto');
    }
  };

  const eliminarProducto = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Error al eliminar');
      setProductos((prev) => prev.filter((p) => p.id !== id));
    } catch (err) {
      alert('❌ Error al eliminar producto');
    }
  };

  useEffect(() => {
    cargarProductos();
  }, []);

  return (
    <ProductosContext.Provider
      value={{
        productos,
        productoSeleccionado,
        setProductoSeleccionado,
        agregarProducto,
        actualizarProducto,
        eliminarProducto,
        cargando,
        error,
      }}
    >
      {children}
    </ProductosContext.Provider>
  );
};
