/* eslint-disable no-unused-vars */
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { Form, Button } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { activitiesService } from '../../services/ActivitiesService';
import './AdminForm.css'

function AdminForm() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [imageData, setImageData] = useState('');
    const [imagePreview, setImagePreview] = useState(null);
    const navigate = useNavigate()

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
            const formData = {
                category_id: data.category_id,
                activity_image: imageData,
                activity_title: data.activity_title,
                activity_description: data.activity_description,
                activity_date: data.activity_date,
                start_time: data.start_time,
                end_time: data.end_time,
                activity_content: data.activity_content,
                available_places: data.available_places
            }
            console.log('Datos enviados al servidor:', formData);
            await activitiesService.createActivity(formData);
            console.log('Formulario enviado con éxito');
        } catch (error) {
            console.error('Error al enviar el formulario:', error);

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
                        <Form.Label htmlFor="activity_category">Categoría</Form.Label>
                        <Form.Control id="activity_category" className="admin-form-input" type="number" {...register('category_id', {
                            required: true
                        })}>
                        </Form.Control>
                        {errors.category_id?.type === 'required' && <p>La categoría es obligatoria</p>}
                    </Form.Group>
                    <Form.Group className='formGroup'>
                        <Form.Label htmlFor="activity_description">Descripción</Form.Label>
                        <Form.Control id="activity_description" className="admin-form-input" type="text" {...register('activity_description', {
                            required: true,
                        })}></Form.Control>
                        {errors.activity_description?.type === 'required' && <p>La descripción es obligatoria</p>}
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
                        <Button type="submit" className='post-activity-btn'>Subir Actividad</Button>
                        </div>
                    </Form.Group>
                    <input id="id-input" type="hidden"></input>
                </Form>
            </div>
        </div>
    );
}
export default AdminForm;