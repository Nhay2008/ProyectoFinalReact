import { useParams } from 'react-router-dom';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Helmet } from 'react-helmet';
import { FaUserCircle, FaEnvelope, FaCalendarAlt, FaUserShield } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';

export default function Perfil() {
  const { id } = useParams();
  const { user } = useAuth();

  // Datos simulados si no hay contexto real de usuario
  const email = user?.email || `${id.toLowerCase()}@tutiendaxpress.com`;
  const fechaRegistro = '2023-01-15'; // Puedes generar aleatoria si quieres
  const rol = user?.rol || 'Cliente';

  return (
    <Container className="mt-4">
      <Helmet>
        <title>Perfil | TuTiendaXpress</title>
        <meta name="description" content={`Perfil del usuario ${id} en Compu Mundo.`} />
      </Helmet>

      <Card className="p-4 shadow-sm text-center border-0">
        <FaUserCircle size={100} className="text-primary mb-3" aria-hidden="true" />
        <h3 className="mb-1">{id}</h3>
        <p className="text-muted mb-4">Bienvenido a tu perfil, <strong>{id}</strong>.</p>

        <Row className="justify-content-center text-start">
          <Col md={6}>
            <p>
              <FaEnvelope className="me-2 text-secondary" />
              <strong>Email:</strong> {email}
            </p>
            <p>
              <FaCalendarAlt className="me-2 text-secondary" />
              <strong>Registrado desde:</strong> {fechaRegistro}
            </p>
            <p>
              <FaUserShield className="me-2 text-secondary" />
              <strong>Rol:</strong> {rol}
            </p>
          </Col>
        </Row>
      </Card>
    </Container>
  );
}
