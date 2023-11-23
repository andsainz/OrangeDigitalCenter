/* eslint-disable react/prop-types */
import { Modal, Button } from "react-bootstrap";

function DeleteModal({ show, onHide, onDelete }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    La actividad será eliminada. ¿Estás seguro?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cancelar
                </Button>
                <Button variant="primary" onClick={onDelete}>
                    Eliminar actividad
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
