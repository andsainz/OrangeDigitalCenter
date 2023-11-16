import { useForm } from "react-hook-form"
import './RegisterForm.css'

const RegisterForm = () => {

    const { register, formState: { errors }, watch, handleSubmit } = useForm({
        defaultValues: {
        }
    })
    const hasDonePreviousActivity = watch('hasDonePreviousActivity');

    const onSubmit = (data) => {
        console.log(data)
    }
    
    return <>
        <div className="form-container">
            <div className="form-content">
                <div className="field-container">
                    <h2>Registro de interesados en programas en el <span className="orange-color">Orange</span> Digital Center 2023-2024</h2>
                    <p>Para más información, escríbenos a odc@larueca.info</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="field-container">
                        <label>¿Has hecho una actividad anteriormente en el ODC?</label>
                        <div className="second-row-field">
                            <input type="radio" id="yes" value="yes" {...register('hasDonePreviousActivity', { required: true })} />
                            <label htmlFor="yes">Sí</label>

                            <input type="radio" id="no" value="no" {...register('hasDonePreviousActivity', { required: true })} />
                            <label htmlFor="no">No</label>
                        </div>
                        {errors.hasDonePreviousActivity?.type === 'required' && <p>Este campo es obligatorio</p>}
                    </div>

                    <div className="field-container">
                        <label>¿Estás suscrito a nuestra newsletter?</label>
                        <div className="second-row-field">
                            <input type="radio" id="yes" value="yes" {...register('isSubscribed', { required: true })} />
                            <label htmlFor="yes">Sí</label>

                            <input type="radio" id="no" value="no" {...register('isSubscribed', { required: true })} />
                            <label htmlFor="no">No</label>
                        </div>
                        {errors.isSubscribed?.type === 'required' && <p>Este campo es obligatorio</p>}
                    </div>
                    <div className="field-container">
                        <label>Email</label>
                        <input className="second-row-field input-styles" type="text" {...register('email', {
                            pattern: /\S+@\S+\.\S+/
                        })}></input>
                        {errors.email?.type === 'pattern' && <p>Formato del email incorrecto</p>}
                        {errors.email?.type === 'required' && <p>Este campo es obligatorio</p>}
                    </div>
                    {hasDonePreviousActivity === 'no' && (
                        <div>
                            <div className="field-container">
                                <label>Nombre y apellidos</label>
                                <input className="second-row-field input-styles" type="text" {...register('fullName', {
                                    required: true,
                                    maxLength: 100,
                                })}></input>
                                {errors.fullName?.type === 'required' && <p>El nombre y los apellidos son obligatorios</p>}
                                {errors.fullName?.type === 'maxLength' && <p>El nombre y los apellidos deben tener menos de 100 caracteres</p>}
                            </div>
                            <div className="field-container">
                                <label>Género</label>
                                <select className="second-row-field" {...register('genre')}>
                                    <option value="woman">Mujer</option>
                                    <option value="men">Hombre</option>
                                    <option value="nonBinary">No binario</option>
                                    <option value="noResponse">No contesta</option>
                                </select>
                                {errors.genre?.type === 'required' && <p>Este campo es obligatorio</p>}
                            </div>
                            <div className="field-container">
                                <label>Edad</label>
                                <select className="second-row-field" {...register('age')}>
                                    <option value="0/15y">0-15 años</option>
                                    <option value="16/24y">16-24 años</option>
                                    <option value="25/55y">25-55 años</option>
                                    <option value="55+y">Más de 55 años</option>
                                </select>
                                {errors.age?.type === 'required' && <p>Este campo es obligatorio</p>}
                            </div>
                            <div className="field-container">
                                <label>Código postal o lugar de residencia</label>
                                <input type="text"  className=" input-styles"{...register('residencePlace')}></input>
                            </div>
                            <div className="field-container">
                                <label>Quiero recibir la newsletter e información sobre otros cursos y actividades del Orange Digital Center</label>
                                <div className="second-row-field">
                                    <input type="radio" id="yes" value="yes" {...register('suscriptionDesire', { required: true })} />
                                    <label htmlFor="yes">Sí</label>

                                    <input type="radio" id="no" value="no" {...register('suscriptionDesire', { required: true })} />
                                    <label htmlFor="no">No</label>
                                </div>
                                {errors.suscriptionDesire?.type === 'required' && <p>Este campo es obligatorio</p>}
                            </div>

                            <div className="field-container">
                                <label>Intereses</label>
                                <div className="second-row-field" id="interests-container">
                                    <div className="interest-input">
                                        <input type="checkbox" id="entrepreneurship" value="entrepreneurship" {...register('interests')} />
                                        <label htmlFor="entrepreneurship">Emprendimiento</label></div>
                                    <div className="interest-input">
                                        <input type="checkbox" id="digitalFactory" value="digitalFactory" {...register('interests')} />
                                        <label htmlFor="digitalFactory">Fabricación digital</label></div>
                                    <div className="interest-input">
                                        <input type="checkbox" id="autism" value="autism" {...register('interests')} />
                                        <label htmlFor="autism">Autismo</label></div>
                                    <div className="interest-input">
                                        <input type="checkbox" id="programming" value="programming" {...register('interests')} />
                                        <label htmlFor="programming">Programación</label></div>
                                    <div className="interest-input">
                                        <input type="checkbox" id="sustainability" value="sustainability" {...register('interests')} />
                                        <label htmlFor="sustainability">Sostenibilidad</label></div>
                                    <div className="interest-input">
                                        <input type="checkbox" id="digitalization" value="digitalization" {...register('interests')} />
                                        <label htmlFor="digitalization">Digitalización</label></div>
                                    <div className="interest-input">
                                        <input type="checkbox" id="others" value="others" {...register('interests')} />
                                        <label htmlFor="others">Otros</label></div>
                                </div>
                                {errors.interests?.type === 'required' && <p>Selecciona al menos un interés</p>}
                            </div>

                            <div className="field-container" >
                                <label>Disponibilidad horaria</label>
                                <div className="second-row-field">
                                    <input type="radio" value="mornings" {...register('availableTime', { required: true })} />
                                    <label htmlFor="morning">Mañanas</label>

                                    <input type="radio" className="availableTime" value="afternoons" {...register('availableTime', { required: true })} />
                                    <label htmlFor="afternoon">Tardes</label>

                                    <input type="radio" className="availableTime" value="allDay" {...register('availableTime', { required: true })} />
                                    <label htmlFor="allDay">Todo el día</label>

                                    <input type="radio" className="availableTime" value="noTimeAvailability" {...register('availableTime', { required: true })} />
                                    <label htmlFor="noTime">Sin disponibilidad presencial</label>
                                </div>
                                {errors.availableTime?.type === 'required' && <p>Este campo es obligatorio</p>}
                            </div>
                        </div>
                    )}

                    <input type="submit" className="send-btn-form" value="Enviar"></input>
                </form>
            </div>
        </div>
    </>
}

export default RegisterForm