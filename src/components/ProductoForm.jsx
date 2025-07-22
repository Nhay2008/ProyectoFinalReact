import { useState, useEffect } from 'react';
import { Form, Row, Col, Alert, Card } from 'react-bootstrap';
import { useProductos } from '../context/ProductosContext';
import { FaPlusCircle, FaEdit } from 'react-icons/fa';

export default function ProductoForm() {
  const {
    agregarProducto,
    actualizarProducto,
    productoSeleccionado,
    setProductoSeleccionado
  } = useProductos();

  const [nombre, setNombre] = useState('');
  const [precio, setPrecio] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [imagen, setImagen] = useState('');
  const [stock, setStock] = useState('');
  const [errores, setErrores] = useState([]);

  useEffect(() => {
    if (productoSeleccionado) {
      setNombre(productoSeleccionado.nombre);
      setPrecio(productoSeleccionado.precio);
      setDescripcion(productoSeleccionado.descripcion);
      setImagen(productoSeleccionado.imagen);
      setStock(productoSeleccionado.stock);
    } else {
      resetForm();
    }
  }, [productoSeleccionado]);

  const resetForm = () => {
    setNombre('');
    setPrecio('');
    setDescripcion('');
    setImagen('');
    setStock('');
    setErrores([]);
  };

  const validar = () => {
    const erroresValidacion = [];
    if (!nombre.trim()) erroresValidacion.push('El nombre es obligatorio.');
    if (precio === '' || isNaN(precio) || Number(precio) <= 0) erroresValidacion.push('El precio debe ser mayor a 0.');
    if (!descripcion || descripcion.length < 10) erroresValidacion.push('La descripción debe tener al menos 10 caracteres.');
    setErrores(erroresValidacion);
    return erroresValidacion.length === 0;
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();
    if (!validar()) return;

    const producto = {
      nombre: nombre.trim(),
      precio: Number(precio),
      descripcion: descripcion.trim(),
      imagen: imagen.trim(),
      stock: Number(stock)
    };

    if (productoSeleccionado) {
      producto.id = productoSeleccionado.id;
      actualizarProducto(producto);
    } else {
      agregarProducto(producto);
    }

    resetForm();
    setProductoSeleccionado(null);
  };

  return (
    <Card className="shadow p-4 mb-4 border-0">
      <h4 className="text-primary mb-4 d-flex align-items-center justify-content-between">
        <span>
          {productoSeleccionado ? (
            <>
              <FaEdit className="me-2" />
              Editar Producto
            </>
          ) : (
            <span
              className="d-flex align-items-center text-primary"
              role="button"
              style={{ cursor: 'pointer' }}
              onClick={handleSubmit}
            >
              <FaPlusCircle className="me-2" />
              Agregar Producto
            </span>
          )}
        </span>
      </h4>

      {errores.length > 0 && (
        <Alert variant="danger">
          <ul className="mb-0">
            {errores.map((err, idx) => (
              <li key={idx}>{err}</li>
            ))}
          </ul>
        </Alert>
      )}

      <Form>
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="nombre">
              <Form.Label>Nombre <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Ej: Camiseta Uchiha"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={6}>
            <Form.Group controlId="precio">
              <Form.Label>Precio <span className="text-danger">*</span></Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 2000"
                value={precio}
                onChange={(e) => setPrecio(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group className="mb-3" controlId="descripcion">
          <Form.Label>Descripción <span className="text-danger">*</span></Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Descripción detallada del producto..."
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          />
        </Form.Group>

        <Row className="mb-3">
          <Col md={8}>
            <Form.Group controlId="imagen">
              <Form.Label>URL de Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="https://..."
                value={imagen}
                onChange={(e) => setImagen(e.target.value)}
              />
            </Form.Group>
          </Col>

          <Col md={4}>
            <Form.Group controlId="stock">
              <Form.Label>Stock</Form.Label>
              <Form.Control
                type="number"
                placeholder="Ej: 10"
                value={stock}
                onChange={(e) => setStock(e.target.value)}
              />
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </Card>
  );
}
