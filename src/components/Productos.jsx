import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import ListaProductos from '../components/ListaProductos';

function Productos() {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => {
        const productosFormateados = data.map((item) => ({
          id: item.id,
          nombre: item.title,
          imagen: item.image,
          precio: item.price,
          ocupacion: item.category || 'Sin categoría',
        }));
        setProductos(productosFormateados);
      })
      .catch((error) => {
        console.error('Error al obtener los productos:', error);
        toast.error('Error al cargar productos');
      });
  }, []);

  return (
    <div className="container py-4">
      <Helmet>
        <title>Productos | TuTiendaXpress</title>
        <meta name="description" content="Explora todos nuestros productos disponibles en Naruto Shop." />
      </Helmet>
      <h2 className="mb-4">Nuestros Productos</h2>
      <ListaProductos productos={productos} />
    </div>
  );
}

export default Productos;
