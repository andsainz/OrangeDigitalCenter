import { Modal } from "react-bootstrap";

function DeleteModal({ show, onHide, onDelete }) {
    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>
                    La actividad será eliminada. ¿Estás seguro?
                </Modal.Title>
            </Modal.Header>
            <Modal.Footer>
                <button className="custom-btn custom-btn-gray" onClick={onHide}>
                    Cancelar
                </button>
                <button className="custom-btn custom-btn-orange" onClick={onDelete}>
                    Eliminar actividad
                </button>
            </Modal.Footer>
        </Modal>
    );
}

export default DeleteModal;
