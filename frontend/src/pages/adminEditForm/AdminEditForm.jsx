
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';
import { Form, Button, Alert } from "react-bootstrap";
import { activitiesService } from '../../services/ActivitiesService';
import { useParams } from 'react-router-dom';

function AdminEditForm({ activityId }) {
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const { activity_id } = useParams();
    const [imageData, setImageData] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);

    useEffect(() => {
        const loadActivityData = async () => {
            try {
                const activity = await activitiesService.getActivity(activity_id);
                setValue('activity_title', activity.activity_title);
                setValue('category_name', activity.category_name);
                setValue('activity_description_short', activity.activity_description_short);
                setValue('activity_description_long', activity.activity_description_long);
                setValue('activity_date' ,activity.activity_date);
                setValue('start_time' ,activity.start_time);
                setValue('end_time' ,activity.end_time);
                setValue('activity_content' ,activity.activity_content);
                setValue('available_places' ,activity.available_places);
            } catch (error) {
                console.error('Error al cargar la actividad:', error);
            }
        };
        loadActivityData();
    }, [activityId, setValue]);

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
            const updateData = {
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
            console.log('Datos actualizados enviados al servidor:', updateData);
            await activitiesService.updateActivity(activity_id.toString(), updateData);
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
                <h1 className='title-post-activity'>Actualiza tu <span className='span-post-activity'>actividad</span></h1>
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
                            <select className="activity-category-dropdown" {...register('category_name', { required: true })}>
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
                        {errors.activity_description_short?.type === 'required' && <p>La descripción es obligatoria</p>}
                    </Form.Group>
                    <Form.Group className='formGroup'>
                        <Form.Label htmlFor="activity_description_long">Descripción detallada</Form.Label>
                        <Form.Control id="activity_description_long" className="admin-form-input" type="text" {...register('activity_description_long', {
                            required: true,
                        })}></Form.Control>
                        {errors.activity_description_long?.type === 'required' && <p>La descripción es obligatoria</p>}
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
                            min: 3,
                            max: 30,
                        })}></Form.Control>
                        {errors.available_places?.type === 'min' && <p>Mínimo 3 plazas disponibles</p>}
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
                                    style={{ maxWidth: '300px', maxHeight: '300px' }}
                                />
                            )}
                            {showErrorAlert && (
                                <Alert
                                    className="alert-form"
                                    variant="dark"
                                    onClose={() => setShowErrorAlert(false)}>
                                    Ha habido un error al actualizar la actividad.
                                </Alert>
                            )}
                            {showSuccessAlert && (
                                <Alert
                                    className="alert-form"
                                    variant="dark"
                                    onClose={() => {
                                        setShowSuccessAlert(false);
                                    }}>
                                    Actividad actualizada con éxito
                                </Alert>
                            )}
                            <Button type="submit" className='post-activity-btn'>Actualizar</Button>
                        </div>
                    </Form.Group>
                    <input id="id-input" type="hidden"></input>
                </Form>
            </div>
        </div>
    );
}
export default AdminEditForm;