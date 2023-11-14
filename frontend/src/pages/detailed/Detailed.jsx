import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Detailed.css";
import QRCode from "react-qr-code";
import Btn_inscription from '../../Components/detailed/btn_inscription/Btn_inscription'

import imgTEMPT from '../../assets/images/eventoODC.jpg'

function DetailedMain() {
  const URL = "http://localhost:3000/activities";
  const {  activity_id } = useParams();
  const [activityDetails, setActivityDetails] = useState({});
  
  useEffect(() => {    
    if (activity_id) {
    fetch(`${URL}/${activity_id}`)
      .then((response) => {
        console.log("Response status:", response.status);
        if (!response.ok) {
          throw new Error("Error to obtain activity details");
        }
        return response.json();
      })
      .then((data) => {
        //console.log("Data:", data);
        setActivityDetails(data);
      })
      .catch((error) => {
        console.error("Error getting activity details:", error);
      });
    }
  }, [activity_id]);
  
    if (!activity_id) {
      return <p>Activity ID not provided</p>;
    }

  const {
    category_id,
    activity_image,
    activity_date,
    title,
    subtitle,
    available_places,
  } = activityDetails;


  return (
    <main className="detailed_main">
      <h2 className="detailed_category orange">Categoría: {category_id}</h2>
      <figcaption className="detailed_figcaption">
        {/* <img src={activity_image} alt="fotografía" /> */}
        <img src={imgTEMPT} className="detailed_image" alt="fotografía" />
      </figcaption>
      <section className="detailed_container">
        <p className="detailed_date">Fecha: <span className="orange">{activity_date} - Hora: ...</span></p>
        <h1 className="detailed_title orange">{title}</h1>
        {/* <h2 className="detailed_subtitle">{subtitle}</h2> */}
        <p className="detailed_description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error hic deserunt sint laborum iure! Harum in autem deleniti. Perspiciatis dignissimos natus, in quia error assumenda harum possimus saepe rerum blanditiis quo pariatur nam qui cupiditate sapiente iste repellendus similique tenetur numquam esse? Optio possimus, qui laudantium deleniti dolore vel voluptas atque! Cum vitae molestias necessitatibus! Dolor accusamus id consequatur nisi aut quas deserunt nemo ex. Cumque omnis, vitae similique molestiae illo expedita natus animi libero voluptatibus officiis? Voluptate labore doloribus dolor consequatur explicabo, voluptatibus neque fugiat dicta quisquam, soluta incidunt repellat reprehenderit asperiores doloremque itaque quibusdam. Doloribus odio consequatur ipsa. Cum vitae molestias necessitatibus! Dolor accusamus id consequatur nisi aut quas deserunt nemo ex. Cumque omnis, vitae similique molestiae illo expedita natus animi libero voluptatibus officiis? Voluptate labore doloribus dolor consequatur explicabo, voluptatibus neque fugiat dicta quisquam, soluta incidunt repellat reprehenderit asperiores doloremque itaque quibusdam. Doloribus odio consequatur ipsa</p>
        <p className="detailed_ContentsTitle orange">Contenidos</p>
        <div className="detailed_container__section">
          <div className="detailed_container__section-left">
            <ul className="detailed_ContentsList">
              <li>  
                <ul>El aprendizaje Visual
                  <li>Los diferentes estilos de aprendizaje</li>
                  <li>El poder del aprendizaje visual</li>
                  <li>Una sociedad visual</li>
                </ul>
            </li>  
            <li>  
                <ul>Educación Inclusiva
                  <li>De la integración escolar a la escuela inclusiva</li>
                  <li>El valor de la diversidad</li>
                  <li>Barreras a la inclusión</li>
                </ul>
            </li>
            <li>  
                <ul>Herramientas visuales
                  <li>Horario visual</li>
                  <li>Secuencias</li>
                  <li>Historias Sociales</li>
                  <li>Cuentos con pictogramas</li>
                  <li>Visual Thinking</li>
                  <li>Mapas visuales</li>
                  <li>Señalización</li>
                  <li>Beneficios</li>
                </ul>
            </li>
            </ul> 
            <p className="detailed_places orange">Plazas Disponibles: {available_places}</p>
          </div>
          <div className="detailed_container__section-right">
            <QRCode className="qr" value={`${URL}/${activity_id}`} />
            <Btn_inscription URL={URL} activity_id={activity_id} />
          </div>
        </div>
      </section>
<div className="espacioMal"></div>
    </main>
  );
}

export default DetailedMain;