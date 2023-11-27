import React, { useState, useEffect } from 'react';
import { adminsService, getToken } from '../../../services/AdminService';
import deleteIcon from '../../../assets/icons/icondelete.png';
import editIcon from '../../../assets/icons/iconedit.png';
import saveIcon from '../../../assets/icons/icon_save_check.png';
import Button from 'react-bootstrap/Button';
import AddAdminModal from './AddAdminModal'; // Importar el nuevo componente
import DeleteAdminModal from './DeleteAdminModal';
import './AdminList.css';

function AdminList() {
  const [admins, setAdmins] = useState([]);
  const [editingAdminId, setEditingAdminId] = useState(null);
  const [editedAdmin, setEditedAdmin] = useState({ fullName: '', email: '', isAdmin: false });
  const [showAdminDeleteModal, setShowAdminDeleteModal] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);
  const [showAddAdminModal, setShowAddAdminModal] = useState(false);

  useEffect(() => {
    const fetchAdmins = async () => {
      try {
        const adminsData = await adminsService.getAdmins();
        setAdmins(adminsData);
      } catch (error) {
        console.error('Error fetching admins:', error.message);
      }
    };

    fetchAdmins();
  }, []);

  const handleEditChange = (adminId, field, value) => {
    setAdmins((prevAdmins) =>
      prevAdmins.map((admin) =>
        admin.id === adminId ? { ...admin, [field]: value } : admin
      )
    );
    setEditedAdmin((prevEditedAdmin) => ({ ...prevEditedAdmin, [field]: value }));
  };

  const handleSave = async (adminId) => {
    try {
      await adminsService.updateAdmin(adminId, editedAdmin);
      setEditingAdminId(null);
    } catch (error) {
      console.error('Error saving admin:', error.message);
    }
  };

  const handleDelete = async (adminId) => {
    try {
      await adminsService.deleteAdmin(adminId);

      const updatedAdmins = admins.filter((admin) => admin.id !== adminId);
      setAdmins(updatedAdmins);
    } catch (error) {
      console.error('Error deleting admin:', error.message);
    }
  };

  const handleAddAdmin = () => {
    setShowAddAdminModal(true);
  };

  const handleAddAdminSubmit = async (newAdmin) => {
    try {
      // Obtener el token antes de realizar la solicitud
      const token = getToken();
  
      if (!token) {
        throw new Error("Token not available. Cannot create admin without authentication.");
      }
  
      // Asegurarse de que el objeto newAdmin tenga todos los campos requeridos
      const { fullName, email, admin_password, isAdmin } = newAdmin;
      if (!fullName || !email || !admin_password || isAdmin === undefined) {
        throw new Error("Missing required data to create an admin.");
      }
  
      console.log("Before createAdmin call", JSON.stringify(newAdmin));
  
      // Agrega más mensajes de consola aquí para depurar
      const addedAdmin = await adminsService.createAdmin(newAdmin, token);
      console.log("After createAdmin call", addedAdmin);
  
      setAdmins((prevAdmins) => [...prevAdmins, addedAdmin]);
    } catch (error) {
      console.error('Error adding admin:', error.message);
    } finally {
      setShowAddAdminModal(false);
    }
  };

  return (
    <div className='admin-list-wrap-container'>
      <div className='admin-list-container'>
        <h1>Lista de administradores</h1>
        <button className='add-admin-btn' onClick={handleAddAdmin}>
          Añadir administrador
        </button>
        <ul className='admin-map-ul'>
          {admins.map((admin) => (
            <li key={admin.id} className='admin-data-li'>
              {editingAdminId === admin.id ? (
                <>
                  <div className='admin-data-text'>
                    <span className='admin-data-text-fixed'>Nombre:</span>
                    <input className="admin-data-input" type="text" value={admin.fullName} onChange={(e) => handleEditChange(admin.id, 'fullName', e.target.value)} />
                    <span className='admin-data-text-fixed'>Email:</span>
                    <input className="admin-data-input" type="text" value={admin.email} onChange={(e) => handleEditChange(admin.id, 'email', e.target.value)} />
                    <span className='admin-data-text-fixed'>Contraseña:</span>
                    <input className="admin-data-input" type="password" value={admin.admin_password} onChange={(e) => handleEditChange(admin.id, 'admin_password', e.target.value)} />
                    <span className='admin-data-text-fixed'>¿Es administrador?</span>
                    <select className='admin-data-input' value={admin.isAdmin} onChange={(e) => handleEditChange(admin.id, 'isAdmin', e.target.value === 'true')}>
                      <option value="true">Sí</option>
                      <option value="false">No</option>
                    </select>
                  </div>
                  <div className='admin-list-icon-container'>
                    <img src={saveIcon} alt="Save Icon" className="save-icon" onClick={() => handleSave(admin.id)} />
                  </div>
                </>
              ) : (
                <>
                  <div className='admin-data-text'>
                    <div className='admin-data-text-row'><span className='admin-data-text-fixed'>Nombre: </span>{admin.fullName}<div className='admin-data-text-space'></div></div>
                    <div className='admin-data-text-row'><span className='admin-data-text-fixed'>Email: </span>{admin.email}<div className='admin-data-text-space'></div></div>
                    <div className='admin-data-text-row'><span className='admin-data-text-fixed'>¿Es administrador?</span> {admin.isAdmin ? 'Sí' : 'No'}</div>
                  </div>
                  <div className='admin-list-icon-container'>
                    <img src={editIcon} alt="Edit Icon" className="icon-edit" onClick={() => setEditingAdminId(admin.id)} />
                    <img src={deleteIcon} alt="Delete Icon" className="icon-delete" onClick={() => {
                      setSelectedAdminId(admin.id);
                      setShowAdminDeleteModal(true);
                    }} />
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
        <AddAdminModal
          show={showAddAdminModal}
          onHide={() => setShowAddAdminModal(false)}
          onAdd={handleAddAdminSubmit}
        />
        <DeleteAdminModal
          show={showAdminDeleteModal}
          onHide={() => setShowAdminDeleteModal(false)}
          onDelete={() => {
            handleDelete(selectedAdminId);
            setShowAdminDeleteModal(false);
          }}
        />
      </div>
    </div>
  );
}

export default AdminList;
