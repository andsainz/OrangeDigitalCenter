import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, Alert } from "react-bootstrap";
import { activitiesService } from '../../../services/ActivitiesService';
import './AdminForm.css'

function AdminForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageData, setImageData] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const base64Data = reader.result;
            setImageData(base64Data);
            setImagePreview(reader.result);
        };

        if (file) {
            reader.readAsDataURL(file);
        }
    };

    const onSubmit = async (data) => {
        try {
            console.log('Datos del formulario:', data)
            const formData = {
                category_name: data.category_name,
                activity_image: imageData,
                activity_title: data.activity_title,
                activity_description_short: data.activity_description_short,
                activity_description_long: data.activity_description_long,
                activity_date: data.activity_date,
                start_time: data.start_time,
                end_time: data.end_time,
                activity_content: data.activity_content,
                available_places: data.available_places
            }
            console.log('Datos enviados al servidor:', formData);
            await activitiesService.createActivity(formData);
            console.log('Formulario enviado con éxito');
            setShowSuccessAlert(true);
            setTimeout(() => {
                window.location.href = 'http://localhost:5173/admin/home';
            }, 2000);
        } catch (error) {
            console.error('Error al enviar el formulario:', error);
            setShowErrorAlert(true);
            console.log('Server response:', error.response);
            if (error.response && error.response.json) {
                const jsonResponse = await error.response.json();
                console.log('Server JSON response:', jsonResponse);
            }
        }
    }

    return (
        <div className='admin-activity-post-container' aria-label="admin-form">
            <div className='admin-form-container'>
                <h1 className='title-post-activity'>Publica una nueva <span className='span-post-activity'>actividad</span></h1>
                <Form className='activity-post-form-container' onSubmit={handleSubmit(onSubmit)} id="admin-form-container">
                    <Form.Group className='formGroup'>
                        <Form.Label htmlFor="activity_title">Título</Form.Label>
                        <Form.Control id="activity_title" className="admin-form-input" type="text" {...register('activity_title', {
                            required: true,
                            minLength: 3,
                        })}>
                        </Form.Control>
                        {errors.activity_title?.type === 'required' && <p>El título es obligatorio</p>}
                        {errors.activity_title?.type === 'minLength' && <p>El título debe tener más de 3 caracteres</p>}
                    </Form.Group>
                    <Form.Group className='formGroup'>
    <div className='admin-form-category-container'>
        <label className="category-title" htmlFor="activity_category">Categoría</label>
        <select id="activity_category" className="activity-category-dropdown" {...register('category_name', { required: true })}>
            <option value="">Selecciona una categoría</option>
            <option value="Emprendimiento">Emprendimiento</option>
            <option value="Fabricación digital">Fabricación digital</option>
            <option value="Programación">Programación</option>
            <option value="Digitalización">Digitalización</option>
            <option value="Otros">Otros</option>
        </select>
    </div>
</Form.Group>

<Form.Group className='formGroup'>
    <Form.Label htmlFor="activity_description_short">Descripción breve</Form.Label>
    <Form.Control id="activity_description_short" className="admin-form-input" type="text" {...register('activity_description_short', {
        required: true,
    })}></Form.Control>
    {errors.activity_description_short?.type === 'required' && <p>La descripción breve es obligatoria</p>}
</Form.Group>
<Form.Group className='formGroup'>
    <Form.Label htmlFor="activity_description_long">Descripción detallada</Form.Label>
    <Form.Control id="activity_description_long" className="admin-form-input" type="text" {...register('activity_description_long', {
        required: true,
    })}></Form.Control>
    {errors.activity_description_long?.type === 'required' && <p>La descripción detallada es obligatoria</p>}
</Form.Group>
<Form.Group className='formGroup'>
    <Form.Label htmlFor="activity_content">Contenidos</Form.Label>
    <Form.Control id="activity_content" className="admin-form-input" type="text" {...register('activity_content', {
        required: true,
    })}></Form.Control>
    {errors.activity_content?.type === 'required' && <p>Los contenidos son obligatorios</p>}
</Form.Group>
<Form.Group className='formGroup'>
    <Form.Label htmlFor="activity_date">Fecha</Form.Label>
    <Form.Control id="activity_date" className="admin-form-input" type="text" {...register('activity_date', {
        required: true,
    })}></Form.Control>
    {errors.activity_date?.type === 'required' && <p>La fecha es obligatoria</p>}
</Form.Group>
<Form.Group className='formGroup'>
    <Form.Label htmlFor="activity_start">Hora de inicio</Form.Label>
    <Form.Control id="activity_start" className="admin-form-input" type="text" {...register('start_time', {
        required: true,
    })}></Form.Control>
    {errors.start_time?.type === 'required' && <p>La hora de inicio es obligatoria</p>}
</Form.Group>
<Form.Group className='formGroup'>
    <Form.Label htmlFor="activity_end">Hora de finalización</Form.Label>
    <Form.Control id="activity_end" className="admin-form-input" type="text" {...register('end_time', {
        required: true,
    })}></Form.Control>
</Form.Group>
<Form.Group className='formGroup'>
    <Form.Label htmlFor="activity_places">Plazas disponibles</Form.Label>
    <Form.Control id="activity_places" className="admin-form-input" type="text" {...register('available_places', {
        min: 0,
        max: 30,
    })}></Form.Control>
    {errors.available_places?.type === 'max' && <p>Máximo 30 plazas disponibles</p>}
</Form.Group>
<Form.Group className='formGroup'>
    <Form.Label htmlFor="activity_image">Sube una imagen</Form.Label>
    <div className='form-group-btn-container'>
        <Form.Control id="activity_image" className="admin-form-input"
            type="file"
            accept="image/*"
            onChange={handleImageChange}>
        </Form.Control>
                            {imagePreview && (
                                <img
                                    src={imagePreview}
                                    alt="Preview"
                                    style={{ maxWidth: '18.75rem', maxHeight: '18.75rem' }}
                                />
                            )}
                            {showErrorAlert && (
                                <Alert
                                    className="alert-form"
                                    variant="dark"
                                    onClose={() => setShowErrorAlert(false)}>
                                    Ha habido un error al crear la actividad.
                                </Alert>
                            )}
                            {showSuccessAlert && (
                                <Alert
                                    className="alert-form"
                                    variant="dark"
                                    onClose={() => {
                                        setShowSuccessAlert(false);
                                    }}>
                                    Actividad creada con éxito
                                </Alert>
                            )}
                            <button type="submit" className='post-activity-btn'>Subir Actividad</button>
                        </div>
                    </Form.Group>
                    <input id="id-input" type="hidden"></input>
                </Form>
            </div>
        </div>
    );
}
export default AdminForm;