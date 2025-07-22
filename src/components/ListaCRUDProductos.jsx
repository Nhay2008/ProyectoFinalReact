import { Table, Button, Spinner, Alert } from 'react-bootstrap';
import { useProductos } from '../context/ProductosContext';
import { useState } from 'react';
import ModalConfirmacion from './ModalConfirmacion';

export default function ListaProductos() {
  const {
    productos,
    setProductoSeleccionado,
    eliminarProducto,
    cargando,
    error
  } = useProductos();

  const [mostrarModal, setMostrarModal] = useState(false);
  const [idAEliminar, setIdAEliminar] = useState(null);

  const confirmarEliminar = (id) => {
    setIdAEliminar(id);
    setMostrarModal(true);
  };

  const handleEliminar = () => {
    eliminarProducto(idAEliminar);
    setMostrarModal(false);
    setIdAEliminar(null);
  };

  if (cargando) return <Spinner animation="border" variant="primary" />;
  if (error) return <Alert variant="danger">{error}</Alert>;
  if (productos.length === 0) return <p>No hay productos cargados.</p>;

  return (
    <>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
            <th style={{ width: '150px' }}>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(({ id, nombre, precio, stock }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{nombre}</td>
              <td>${precio}</td>
              <td>{stock}</td>
              <td>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => setProductoSeleccionado(productos.find(p => p.id === id))}
                >
                  Editar
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => confirmarEliminar(id)}
                >
                  Borrar
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <ModalConfirmacion
        mostrar={mostrarModal}
        onClose={() => setMostrarModal(false)}
        onConfirm={handleEliminar}
        mensaje="¿Estás seguro que deseas eliminar este producto?"
      />
    </>
  );
}
