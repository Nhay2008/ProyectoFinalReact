import React, { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Carrito() {
  const {
    carrito,
    vaciarCarrito,
    eliminarProducto,
    total,
  } = useContext(CarritoContext);

  const navigate = useNavigate();

  const finalizarCompra = () => {
    alert('🎉 Muchas gracias por su compra!');
    vaciarCarrito();
    navigate('/');
  };

  return (
    <div className="container mt-5">
      <h3 className="mb-4">🛒 Carrito de compras</h3>

      {carrito.length === 0 ? (
        <p>Tu carrito está vacío.</p>
      ) : (
        <>
          <div className="list-group mb-4">
            {carrito.map((producto) => (
              <div
                key={producto.id}
                className="list-group-item d-flex align-items-center justify-content-between shadow-sm rounded-3 mb-3"
              >
                {/* Imagen */}
                <img
                  src={producto.imagen || producto.images?.[0]}
                  alt={producto.nombre || producto.name}
                  style={{
                    height: '60px',
                    width: '60px',
                    objectFit: 'contain',
                    marginRight: '1rem',
                  }}
                  className="rounded"
                />

                {/* Información */}
                <div className="flex-grow-1 me-3">
                  <h6 className="mb-1">{producto.nombre || producto.name}</h6>
                  <p className="mb-0 text-muted">
                    Precio: ${producto.precio || 1200}
                  </p>
                </div>

                {/* Botón eliminar */}
                <Button
                  variant="outline-danger"
                  size="sm"
                  onClick={() => eliminarProducto(producto.id)}
                >
                  🗑️ Eliminar
                </Button>
              </div>
            ))}
          </div>

          {/* Total y botones */}
          <div className="d-flex justify-content-between align-items-center">
            <h5>Total: ${total.toFixed(2)}</h5>
            <div className="d-flex gap-2">
              <Button variant="danger" onClick={vaciarCarrito}>
                🗑️ Vaciar carrito
              </Button>
              <Button variant="success" onClick={finalizarCompra}>
                ✅ Finalizar compra
              </Button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Carrito;


// Este componente muestra el carrito de compras, permite vaciarlo y finalizar la compra.
// Se utiliza el contexto CarritoContext para manejar el estado del carrito y los mensajes.
