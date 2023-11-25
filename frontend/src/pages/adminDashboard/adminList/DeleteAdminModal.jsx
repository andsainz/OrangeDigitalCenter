/* eslint-disable react/prop-types */
import { Modal } from "react-bootstrap";
import '../adminHome/DeleteModal.css'

function DeleteModal({ show, onHide, onDelete }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    El administrador será eliminado. ¿Estás seguro?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <button className="custom-btn custom-btn-gray" onClick={onHide}>
                    Cancelar
                </button>
                <button className="custom-btn custom-btn-orange" onClick={onDelete}>
                    Eliminar
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
