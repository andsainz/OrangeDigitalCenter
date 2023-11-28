import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { adminsService } from '../../../services/AdminService'
import "./AddAdminList.css";

const AddAdminModal = ({ show, onHide, onAdd }) => {
    const [newAdmin, setNewAdmin] = useState({
        fullName: "",
        email: "",
        admin_password: "",
        confirm_password: "",
        isAdmin: false,
    });

    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const [showEmailAlert, setShowEmailAlert] = useState(false);
    const handleInputChange = (field, value) => {
        setNewAdmin((prevAdmin) => ({ ...prevAdmin, [field]: value }));
    };

    const handleAddAdmin = async () => {
        if (newAdmin.admin_password !== newAdmin.confirm_password) {
            setPasswordsMatch(false);
            return;
        }
    
        if (await adminsService.checkAdminExists(newAdmin.email)) {
            setShowEmailAlert(true);
            return;
        }
    
        onAdd(newAdmin);
        onHide();
    };    


    return (
        <Modal show={show} onHide={onHide}>
            <Modal.Header closeButton>
                <Modal.Title>Añadir nuevo administrador</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="add-admin-list-body">
                    <label>Nombre:</label>
                    <input
                        className="add-admin-input"
                        type="text"
                        value={newAdmin.fullName}
                        onChange={(e) =>
                            handleInputChange("fullName", e.target.value)
                        }
                    />
                </div>
                <div className="add-admin-list-body">
                    <label>Email:</label>
                    <input
                        className="add-admin-input"
                        type="text"
                        value={newAdmin.email}
                        onChange={(e) =>
                            handleInputChange("email", e.target.value)
                        }
                    />
                </div>
                <div className="add-admin-list-body">
                    <label>Contraseña:</label>
                    <input
                        className="add-admin-input"
                        type="password"
                        value={newAdmin.admin_password}
                        onChange={(e) =>
                            handleInputChange("admin_password", e.target.value)
                        }
                    />
                </div>
                <div className="add-admin-list-body">
                    <label>Confirmar Contraseña:</label>
                    <input
                        className="add-admin-input"
                        type="password"
                        value={newAdmin.confirm_password}
                        onChange={(e) =>
                            handleInputChange(
                                "confirm_password",
                                e.target.value
                            )
                        }
                    />
                    {!passwordsMatch && (
                        <p className="alert-message">
                            Las contraseñas no coinciden.
                        </p>
                    )}
                </div>
                <div className="add-admin-list-body">
                    <label>¿Es administrador?</label>
                    <select
                        className="add-admin-input"
                        value={newAdmin.isAdmin}
                        onChange={(e) =>
                            handleInputChange(
                                "isAdmin",
                                e.target.value === "true"
                            )
                        }>
                        <option value="true">Sí</option>
                        <option value="false">No</option>
                    </select>
                </div>
                {showEmailAlert && (
                <Alert variant="dark" onClose={() => setShowEmailAlert(false)} dismissible>
                    Ha habido un error al añadir un administrador.
                </Alert>
            )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onHide}>
                    Cerrar
                </Button>
                <button
                    className="add-newadmin-btn"
                    variant="primary"
                    onClick={handleAddAdmin}>
                    Añadir
                </button>
            </Modal.Footer>
        </Modal>
    );
}
export default AddAdminModal;
