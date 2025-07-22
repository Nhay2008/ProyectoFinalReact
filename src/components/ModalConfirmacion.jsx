import { Modal, Button } from 'react-bootstrap';

export default function ModalConfirmacion({ mostrar, onClose, onConfirm, mensaje }) {
  return (
    <Modal show={mostrar} onHide={onClose} centered>
      <Modal.Header closeButton>
        <Modal.Title>Confirmar acción</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{mensaje || '¿Estás seguro que deseas continuar?'}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Cancelar
        </Button>
        <Button variant="danger" onClick={onConfirm}>
          Sí, eliminar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
