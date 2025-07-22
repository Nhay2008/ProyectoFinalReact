import React, { useContext, useState } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Pagination } from 'react-bootstrap';

function ListaProductos({ productos }) {
  const { agregarProducto } = useContext(CarritoContext);
  const [paginaActual, setPaginaActual] = useState(1);

  const productosPorPagina = 8;
  const totalPaginas = Math.ceil(productos.length / productosPorPagina);
  const inicio = (paginaActual - 1) * productosPorPagina;
  const productosPagina = productos.slice(inicio, inicio + productosPorPagina);

  const agregarAlCarrito = (producto) => {
    agregarProducto(producto);
  };

  const cambiarPagina = (numero) => {
    setPaginaActual(numero);
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        {productosPagina.map((producto) => (
          <div key={producto.id} className="col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow-sm border-0 rounded-3" style={{ fontSize: '0.85rem' }}>
              <img
                src={producto.imagen || producto.images?.[0]}
                alt={producto.nombre || producto.name}
                className="card-img-top rounded-top"
                style={{ height: '220px', objectFit: 'contain', padding: '1rem' }}
                loading="lazy"
              />
              <div className="card-body d-flex flex-column text-center">
                <h6 className="card-title fw-bold text-primary mb-2">
                  {producto.nombre || producto.name}
                </h6>
                <p className="card-text text-muted mb-3">
                  <strong>Categoría:</strong> {producto.ocupacion || producto.info?.Ocupación || 'N/A'}<br />
                  <strong>Precio:</strong> ${producto.precio || 1200}
                </p>
                <button
                  className="btn btn-warning btn-sm mt-auto fw-semibold"
                  onClick={() => agregarAlCarrito(producto)}
                >
                  🛒 Agregar al carrito
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {totalPaginas > 1 && (
        <Pagination className="justify-content-center mt-4">
          {[...Array(totalPaginas)].map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === paginaActual}
              onClick={() => cambiarPagina(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </div>
  );
}

export default ListaProductos;