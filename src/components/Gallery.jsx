import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

function Gallery({ productos }) {
  return (
    <Container>
      <h2>Productos</h2>
      <Row>
        {productos.map((producto) => (
          <Col md={4} key={producto.id} className="mb-4">
            <Card>
              <Card.Img variant="top" src={producto.imagen} />
              <Card.Body>
                <Card.Title>{producto.nombre}</Card.Title>
              </Card.Body>
              
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Gallery;