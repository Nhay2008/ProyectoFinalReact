import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const año = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-4 mt-auto">
      <Container>
        <Row className="align-items-center text-center text-md-start">
          <Col md={6} className="mb-3 mb-md-0">
            <h5 className="mb-1">TuTiendaXpress</h5>
            <p className="mb-0">© {año} Todos los derechos reservados.</p>
          </Col>
          <Col md={6} className="text-md-end">
            <a
              href="https://facebook.com"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://instagram.com"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://twitter.com"
              className="text-white me-3"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://github.com"
              className="text-white"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
