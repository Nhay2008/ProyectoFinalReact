import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Alert } from 'react-bootstrap';

function NarutoShop() {
  const [personajes, setPersonajes] = useState([]);
  const [carrito, setCarrito] = useState([]);
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    fetch('https://naruto-api.gustanobre.com.br/api/v1/characters')
      .then(response => response.json())
      .then(data => setPersonajes(data))
      .catch(error => console.error('Error al obtener los personajes:', error));
  }, []);

  const agregarAlCarrito = (personaje) => {
    setCarrito([...carrito, personaje]);
    setMensaje(`${personaje.name} agregado al carrito`);
    setTimeout(() => setMensaje(''), 3000);
  };

  return (
    <Container>
      <h2 className="text-center my-4">Tienda de Naruto</h2>
      {mensaje && <Alert variant="success">{mensaje}</Alert>}
      <Row>
        {personajes.map((personaje, idx) => (
          <Col md={4} key={idx} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={personaje.images && personaje.images.length > 0 ? personaje.images[0] : 'https://via.placeholder.com/200x300?text=Sin+Imagen'}
                alt={personaje.name}
              />
              <Card.Body>
                <Card.Title>{personaje.name}</Card.Title>
                <Button variant="primary" onClick={() => agregarAlCarrito(personaje)}>
                  Agregar al carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default NarutoShop;