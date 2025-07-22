import { Container } from 'react-bootstrap';
import { ProductosProvider } from '../context/ProductosContext';
import ProductoForm from '../components/ProductoForm';
import ListaProductos from '../components/ListaCRUDProductos';

export default function AdminProductos() {
  return (
    <ProductosProvider>
      <Container className="my-4">
        <h2 className="mb-4">Administrar Productos</h2>
        <ProductoForm />
        <hr />
        <ListaProductos />
      </Container>
    </ProductosProvider>
  );
}
