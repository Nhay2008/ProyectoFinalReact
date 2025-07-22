import { useNavigate } from 'react-router-dom';
import { Container, Form, Button, Card } from 'react-bootstrap';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { toast } from 'react-toastify';
import { Helmet } from 'react-helmet';
import { FaUserCircle } from 'react-icons/fa';

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [usuario, setUsuario] = useState('admin');
  const [password, setPassword] = useState('1234');
  const [tocado, setTocado] = useState(false);

  const handleLogin = () => {
    if (usuario === 'admin' && password === '1234') {
      login({ nombre: usuario });
      toast.success(`Bienvenido, ${usuario}`);
      navigate(`/perfil/${usuario}`);
    } else {
      setTocado(true);
      toast.error('❌ Credenciales incorrectas. Usa admin / 1234');
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | TuTiendaXpress</title>
        <meta name="description" content="Inicia sesión para acceder a tu cuenta en TuTiendaXpress." />
      </Helmet>

      <Container className="d-flex justify-content-center align-items-center py-5">
        <Card className="shadow p-4" style={{ maxWidth: 400, width: '100%' }}>
          <div className="text-center mb-4">
            <FaUserCircle size={60} className="text-primary" />
            <h2 className="mt-2">Iniciar sesión</h2>
          </div>

          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                isInvalid={tocado && usuario !== 'admin'}
                autoComplete="username"
              />
              <Form.Control.Feedback type="invalid">
                Usuario incorrecto
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                isInvalid={tocado && password !== '1234'}
                autoComplete="current-password"
              />
              <Form.Control.Feedback type="invalid">
                Contraseña incorrecta
              </Form.Control.Feedback>
            </Form.Group>

            <Button variant="primary" className="w-100" onClick={handleLogin}>
              Entrar
            </Button>
          </Form>
        </Card>
      </Container>
    </>
  );
}
