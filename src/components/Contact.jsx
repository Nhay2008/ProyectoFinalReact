import React from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';

function Contact() {
  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={8} lg={6}>
          <Card className="shadow p-4">
            <h2 className="text-center mb-4">Contacto</h2>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "0.9rem" }}>Nombre</Form.Label>
                <Form.Control type="text" placeholder="Tu nombre" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "0.9rem" }}>Email</Form.Label>
                <Form.Control type="email" placeholder="tu@email.com" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label style={{ fontSize: "0.9rem" }}>Mensaje</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <div className="d-grid">
                <Button variant="primary" type="submit">Enviar</Button>
              </div>
            </Form>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;