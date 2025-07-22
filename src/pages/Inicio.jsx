import { Container, Button, Row, Col, Card, Carousel } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { FaShoppingBag } from 'react-icons/fa';

export default function Inicio() {
  const navigate = useNavigate();

  // 👉 Base path dinámico (funciona en GitHub Pages y en localhost)
  const basePath = import.meta.env.BASE_URL;

  return (
    <>
      <Helmet>
        <title>Inicio | TuTiendaXpress</title>
        <meta name="description" content="Bienvenido a la tienda Compu Mundo - productos únicos, envío rápido y pago seguro." />
      </Helmet>

      <Container className="flex-grow-1 d-flex flex-column justify-content-center py-4">
        <div className="text-center mb-4">
          <h1 className="display-5 fw-bold text-primary">Bienvenido a Nuestra Tienda</h1>
          <p className="lead text-muted">Explora nuestra página con las tendencias en ROPA y otros accesorios.</p>
          <Button
            variant="warning"
            size="lg"
            className="mt-3 fw-semibold"
            onClick={() => navigate('/productos')}
            aria-label="Ver productos disponibles"
          >
            <FaShoppingBag className="me-2" /> Ver Productos
          </Button>
        </div>

        {/* ✅ Carrusel con rutas dinámicas */}
        <Carousel
          className="mb-4 rounded-4 overflow-hidden shadow"
          role="region"
          aria-label="Galería de productos"
        >
          {[
            { src: `${basePath}img/naruto.jpg`, alt: 'Naruto' },
            { src: `${basePath}img/sasuke.jpg`, alt: 'Sasuke' },
            { src: `${basePath}img/equipo7.jpg`, alt: 'Equipo 7' },
          ].map((item, index) => (
            <Carousel.Item key={index} className="text-center">
              <img
                className="d-block w-100"
                src={item.src}
                alt={item.alt}
                style={{ maxHeight: '400px', objectFit: 'contain', backgroundColor: 'transparent' }}
              />
            </Carousel.Item>
          ))}
        </Carousel>

        {/* ✅ Tarjetas informativas */}
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold text-primary">Productos Únicos</h5>
                <p className="text-muted">Colección exclusiva de Ropa, Accesorios y más.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold text-primary">Pago Seguro</h5>
                <p className="text-muted">Tus datos están protegidos y puedes comprar con total confianza.</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="h-100 text-center shadow-sm border-0">
              <Card.Body>
                <h5 className="fw-bold text-primary">Envíos Rápidos</h5>
                <p className="text-muted">Recibe tus productos en tiempo récord directamente en tu hogar.</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}
