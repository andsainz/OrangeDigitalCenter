/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import "./RegisterForm.css";
import { FormService } from "../../services/FormService";
import { Alert } from "react-bootstrap";
import PopUp from "../../Components/popUpSubs/PopUp";

const RegisterForm = () => {
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formError, setFormError] = useState(null);
    const [showErrorAlert, setShowErrorAlert] = useState(false);
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showPopUp, setShowPopUp] = useState(false);
    const {
        register,
        formState: { errors },
        watch,
        handleSubmit,
    } = useForm({
        defaultValues: {},
    });
    const hasDonePreviousActivity = watch("hasDonePreviousActivity");
    const isSubscribed = watch("isSubscribed");

    const onSubmit = async (data) => {
        try {
            await FormService.postForm(data);
            setFormSubmitted(true);
            setFormError(null);
            setShowSuccessAlert(true);

            setTimeout(() => {
                window.location.href = 'http://localhost:5173/';
            }, 2000);

        } catch (error) {
            setFormSubmitted(false);
            setFormError(
                "Error al enviar el formulario. Por favor, inténtelo de nuevo."
            );
            console.error("Error al enviar el formulario:", error);
            setShowErrorAlert(true);
        }
    };

    useEffect(() => {
        if (isSubscribed === "no") {
            setShowPopUp(true);
        } else {
            setShowPopUp(false);
        }
    }, [isSubscribed]);


    return (
        <>
            <div className="form-container" aria-label="register-form">
                <div className="form-content">
                    <div className="field-container">
                        <h2>
                            Registro de interesados en programas en el{" "}
                            <span className="orange-color">Orange</span> Digital
                            Center 2023-2024
                        </h2>
                        <p>Rellena los campos y envía el formulario.</p>
                        <p>
                            Para más información, escríbenos a info@orangedigitalcenter.es
                        </p>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="field-container">
                            <label>
                                ¿Has hecho una actividad anteriormente en el
                                ODC?
                            </label>
                            <div className="second-row-field">
                                <input
                                    type="radio"
                                    id="yes"
                                    value="yes"
                                    {...register("hasDonePreviousActivity", {
                                        required: true,
                                    })}
                                />
                                <label htmlFor="yes">Sí</label>

                                <input
                                    type="radio"
                                    id="no"
                                    value="no"
                                    {...register("hasDonePreviousActivity", {
                                        required: true,
                                    })}
                                />
                                <label htmlFor="no">No</label>
                            </div>
                            {errors.hasDonePreviousActivity?.type ===
                                "required" && <p>Este campo es obligatorio</p>}
                        </div>

                        <div className="field-container">
                            <label>¿Estás suscrito a nuestra newsletter?</label>
                            <div className="second-row-field">
                                <input
                                    type="radio"
                                    id="yes"
                                    value="yes"
                                    {...register("isSubscribed", {
                                        required: true,
                                    })}
                                />
                                <label htmlFor="yes">Sí</label>
                                <input
                                    type="radio"
                                    id="no"
                                    value="no"
                                    {...register("isSubscribed", {
                                        required: true,
                                    })}
                                />
                                <label htmlFor="no">No</label>
                            </div>
                            {errors.isSubscribed?.type === "required" && (
                                <p>Este campo es obligatorio</p>
                            )}
                        </div>
                        {showPopUp && <PopUp />}

                        <div className="field-container">
                            <label htmlFor="email">Email</label>
                            <input
                                id="email"
                                className="second-row-field input-styles"
                                type="text"
                                {...register("email", {
                                    pattern: /\S+@\S+\.\S+/,
                                })}></input>
                            {errors.email?.type === "pattern" && (
                                <p>Formato del email incorrecto</p>
                            )}
                            {errors.email?.type === "required" && (
                                <p>Este campo es obligatorio</p>
                            )}
                        </div>
                        {hasDonePreviousActivity === "no" && (
                            <div>
                                <div className="field-container">
                                    <label htmlFor="fullName">Nombre y apellidos</label>
                                    <input
                                        id="fullName"
                                        className="second-row-field input-styles"
                                        type="text"
                                        {...register("fullName", {
                                            required: true,
                                            maxLength: 100,
                                        })}></input>
                                    {errors.fullName?.type === "required" && (
                                        <p>
                                            El nombre y los apellidos son
                                            obligatorios
                                        </p>
                                    )}
                                    {errors.fullName?.type === "maxLength" && (
                                        <p>
                                            El nombre y los apellidos deben
                                            tener menos de 100 caracteres
                                        </p>
                                    )}
                                </div>
                                <div className="field-container">
                                    <label>Género</label>
                                    <div
                                        className="second-row-field"
                                        id="gender-container">
                                        <input
                                            type="radio"
                                            value="woman"
                                            {...register("gender", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="woman">Mujer</label>

                                        <input
                                            type="radio"
                                            value="men"
                                            {...register("gender", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="men">Hombre</label>

                                        <input
                                            type="radio"
                                            value="nonBinary"
                                            {...register("gender", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="nonBinary">
                                            No binario
                                        </label>

                                        <input
                                            type="radio"
                                            value="noResponse"
                                            {...register("gender", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="noResponse">
                                            No contesta
                                        </label>
                                    </div>
                                    {errors.gender?.type === "required" && (
                                        <p>Este campo es obligatorio</p>
                                    )}
                                </div>

                                <div className="field-container">
                                    <label>Edad</label>
                                    <div
                                        className="second-row-field"
                                        id="age-container">
                                        <input
                                            type="radio"
                                            id="0-15y"
                                            value="0/15y"
                                            {...register("age", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="0-15y">0-15 años</label>

                                        <input
                                            type="radio"
                                            id="16-24y"
                                            value="16/24y"
                                            {...register("age", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="16-24y">
                                            16-24 años
                                        </label>

                                        <input
                                            type="radio"
                                            id="25-55y"
                                            value="25/55y"
                                            {...register("age", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="25-55y">
                                            25-55 años
                                        </label>

                                        <input
                                            type="radio"
                                            id="55+y"
                                            value="55+y"
                                            {...register("age", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="55+y">
                                            Más de 55 años
                                        </label>
                                    </div>
                                    {errors.age?.type === "required" && (
                                        <p>Este campo es obligatorio</p>
                                    )}
                                </div>
                                <div className="field-container">
                                    <label>
                                        Código postal o lugar de residencia
                                    </label>
                                    <input
                                        type="text"
                                        className=" input-styles"
                                        {...register("residencePlace")}></input>
                                </div>
                                <div className="field-container">
                                    <label>Intereses</label>
                                    <div
                                        className="second-row-field"
                                        id="interests-container">
                                        <div className="interest-input">
                                            <input
                                                type="radio"
                                                id="entrepreneurship"
                                                value="entrepreneurship"
                                                {...register("interests")}
                                            />
                                            <label htmlFor="entrepreneurship">
                                                Emprendimiento
                                            </label>
                                        </div>
                                        <div className="interest-input">
                                            <input
                                                type="radio"
                                                id="digitalFactory"
                                                value="digitalFactory"
                                                {...register("interests")}
                                            />
                                            <label htmlFor="digitalFactory">
                                                Fabricación digital
                                            </label>
                                        </div>
                                        <div className="interest-input">
                                            <input
                                                type="radio"
                                                id="autism"
                                                value="autism"
                                                {...register("interests")}
                                            />
                                            <label htmlFor="autism">
                                                Autismo
                                            </label>
                                        </div>
                                        <div className="interest-input">
                                            <input
                                                type="radio"
                                                id="programming"
                                                value="programming"
                                                {...register("interests")}
                                            />
                                            <label htmlFor="programming">
                                                Programación
                                            </label>
                                        </div>
                                        <div className="interest-input">
                                            <input
                                                type="radio"
                                                id="sustainability"
                                                value="sustainability"
                                                {...register("interests")}
                                            />
                                            <label htmlFor="sustainability">
                                                Sostenibilidad
                                            </label>
                                        </div>
                                        <div className="interest-input">
                                            <input
                                                type="radio"
                                                id="digitalization"
                                                value="digitalization"
                                                {...register("interests")}
                                            />
                                            <label htmlFor="digitalization">
                                                Digitalización
                                            </label>
                                        </div>
                                        <div className="interest-input">
                                            <input
                                                type="radio"
                                                id="others"
                                                value="others"
                                                {...register("interests")}
                                            />
                                            <label htmlFor="others">
                                                Otros
                                            </label>
                                        </div>
                                    </div>
                                    {errors.interests?.type === "required" && (
                                        <p>Selecciona al menos un interés</p>
                                    )}
                                </div>

                                <div className="field-container">
                                    <label>Disponibilidad horaria</label>
                                    <div className="second-row-field">
                                        <input
                                            type="radio"
                                            value="mornings"
                                            {...register("availableTime", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="morning">Mañanas</label>

                                        <input
                                            type="radio"
                                            className="availableTime"
                                            value="afternoons"
                                            {...register("availableTime", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="afternoon">
                                            Tardes
                                        </label>

                                        <input
                                            type="radio"
                                            className="availableTime"
                                            value="allDay"
                                            {...register("availableTime", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="allDay">
                                            Todo el día
                                        </label>

                                        <input
                                            type="radio"
                                            className="availableTime"
                                            value="noTimeAvailability"
                                            {...register("availableTime", {
                                                required: true,
                                            })}
                                        />
                                        <label htmlFor="noTime">
                                            Sin disponibilidad presencial
                                        </label>
                                    </div>
                                    {errors.availableTime?.type ===
                                        "required" && (
                                            <p>Este campo es obligatorio</p>
                                        )}
                                </div>
                            </div>
                        )}
                        {showErrorAlert && (
                            <Alert
                                className="alert-form"
                                variant="dark"
                                onClose={() => setShowErrorAlert(false)}>
                                Ha habido un error con el envío de su formulario
                            </Alert>
                        )}
                        {showSuccessAlert && (
                            <Alert
                                className="alert-form"
                                variant="dark"
                                onClose={() => {
                                    setShowSuccessAlert(false);
                                }}>
                                Formulario enviado con éxito
                            </Alert>
                        )}
                        <div className="privacy-policy-container">
                            <input type="checkbox" className="privacy-policy-checkbox" required onChange={(e) => setAcceptedPrivacyPolicy(e.target.checked)} />

                            <div className='privacy-policy-readed sign-up-form-privacy-policy'>
                                <p className='privacy-policy-txt' htmlFor="privacyPolicy">
                                    He leído y acepto la </p><a className='pop-up-privacy-policy-link' href="/privacypolicy" target="_blank" rel="noopener noreferrer">política de privacidad.</a><p className='privacy-policy-readed'>Es necesario aceptar la política de privacidad de datos para poder enviar el formulario.
                                </p>
                            </div>

                        </div>
                        <input
                            type="submit"
                            className="send-btn-form"
                            value="Enviar"></input>

                    </form>
                </div>
            </div>
        </>
    );
};

export default RegisterForm;
