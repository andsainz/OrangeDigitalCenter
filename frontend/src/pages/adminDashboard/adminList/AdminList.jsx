import React, { useState, useEffect } from 'react';
import { adminsService } from '../../../services/AdminService';
import deleteIcon from '../../../assets/icons/icondelete.png';
import editIcon from '../../../assets/icons/iconedit.png';
import saveIcon from '../../../assets/icons/icon_save_check.png';
import DeleteAdminModal from './DeleteAdminModal'
import './AdminList.css'

function AdminList() {
  const [admins, setAdmins] = useState([]);
  const [editingAdminId, setEditingAdminId] = useState(null);
  const [editedAdmin, setEditedAdmin] = useState({ fullName: '', email: '', isAdmin: false });
  const [showAdminDeleteModal, setShowAdminDeleteModal] = useState(false);
  const [selectedAdminId, setSelectedAdminId] = useState(null);

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

  return (
    <div className='admin-list-wrap-container'>
      <div className='admin-list-container'>
        <h1>Lista de administradores</h1>
        <button className='add-admin-btn' onClick={() => handleAddAdmin}>Añadir administrador</button>
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
