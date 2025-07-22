import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { Alert, Container } from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer';
import ListaProductos from './components/ListaProductos';
import Inicio from './pages/Inicio';
import Login from './pages/Login';
import Contacto from './pages/Contacto';
import Perfil from './pages/Perfil';
import Productos from './components/Productos';
import Administracion from './pages/Administracion';
import RutaProtegida from './components/RutaProtegida';
import NarutoShop from './components/NarutoShop';
import Carrito from './pages/Carrito';
import AdminProductos from './pages/AdminProductos';
import { CarritoProvider, CarritoContext } from './context/CarritoContext';
import { AuthProvider } from './context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Helmet } from 'react-helmet';

function AppContent() {
  const { mensaje } = useContext(CarritoContext);

  return (
    <div className="d-flex flex-column min-vh-100">
      <Helmet>
        <title>TuTiendaXpress | E-commerce React</title>
        <meta name="description" content="Tienda online de productos de Naruto y más. Compra segura, productos únicos y envío rápido." />
      </Helmet>

      <Header />

      {mensaje && (
        <div style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          zIndex: 9999,
          minWidth: '280px',
        }}>
          <Alert variant="success" className="shadow-sm text-center fw-semibold mb-0">
            {mensaje}
          </Alert>
        </div>
      )}

      <main className="flex-grow-1">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/productos" element={<Productos />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/carrito" element={
            <RutaProtegida>
              <Carrito />
            </RutaProtegida>
          } />
          <Route path="/naruto" element={<NarutoShop />} />
          <Route path="/perfil/:id" element={
            <RutaProtegida>
              <Perfil />
            </RutaProtegida>
          } />
          <Route path="/admin" element={
            <RutaProtegida>
              <Administracion />
            </RutaProtegida>
          } />
          <Route path="/admin-productos" element={
            <RutaProtegida>
              <AdminProductos />
            </RutaProtegida>
          } />
          <Route path="*" element={
            <Container className="mt-5 text-center">
              <h2>404 - Página no encontrada</h2>
              <p>La ruta que estás buscando no existe.</p>
            </Container>
          } />
        </Routes>
      </main>

      <Footer />
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop closeOnClick pauseOnHover theme="colored" />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <CarritoProvider>
        <BrowserRouter basename="/ProyectoFinalReact">
          <AppContent />
        </BrowserRouter>
      </CarritoProvider>
    </AuthProvider>
  );
}

export default App;
