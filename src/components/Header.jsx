import { Navbar, Container, Nav, Button, Badge } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CarritoContext } from '../context/CarritoContext';
import { useAuth } from '../context/AuthContext';

export default function Header() {
  const navigate = useNavigate();
  const { carrito } = useContext(CarritoContext);
  const { isAuthenticated, logout, user } = useAuth();

  const cerrarSesion = () => {
    logout();
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">TuTiendaXpress</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-between">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>

            {isAuthenticated && (
              <>
                <Nav.Link as={Link} to={`/perfil/${user?.nombre}`}>Perfil</Nav.Link>
                <Nav.Link as={Link} to="/admin">Admin</Nav.Link>
                <Nav.Link as={Link} to="/admin-productos">Productos CRUD</Nav.Link>
              </>
            )}
          </Nav>

          <Nav className="align-items-center">
            {!isAuthenticated ? (
              <Nav.Link as={Link} to="/login">Login</Nav.Link>
            ) : (
              <Button variant="outline-light" onClick={cerrarSesion}>
                Cerrar sesión
              </Button>
            )}

            <Nav.Link
              as={Link}
              to="/carrito"
              className="position-relative ms-3"
              style={{ fontSize: '1.6rem', color: 'white' }}
            >
              🛒
              {carrito.length > 0 && (
                <Badge
                  bg="danger"
                  pill
                  className="position-absolute top-0 start-100 translate-middle"
                  style={{ fontSize: '0.75rem' }}
                >
                  {carrito.length}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// El código de este componente Header es una barra de navegación que incluye enlaces a diferentes páginas de la aplicación,
// un botón para iniciar/cerrar sesión y un ícono de carrito de compras con un contador de productos. Utiliza React Router para la navegación y Bootstrap para el diseño.