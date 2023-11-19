import './Odc.css';
import Odc1 from '../../assets/imagesOdc/odc1.png';
import Odc2 from '../../assets/imagesOdc/odc2.png';
import Odc3 from '../../assets/imagesOdc/odc3.png';
import Odc4 from '../../assets/imagesOdc/odc4.png';
import Odc5 from '../../assets/imagesOdc/odc5.png';
import Odc6 from '../../assets/imagesOdc/odc6.png';

const DiscoverODC = () => {
  return (
    <div className="discover-container">
      <h1>Descubre<span><br></br>Orange</span> Digital Center</h1>
      <div className="image-text">
        <h3>
          No te pierdas <span>todos</span> los eventos, talleres, cursos, etc. que hemos preparado para ti.<br></br>
          Toma nota y conecta con tu <span>futuro</span>.
        </h3>
      </div>
      <div className="image-grid">
        <img src={Odc1} alt="Descripción de la imagen" />
        <img src={Odc2} alt="Descripción de la imagen" />
        <img src={Odc3} alt="Descripción de la imagen" />
        <img src={Odc4} alt="Descripción de la imagen" />
        <img src={Odc5} alt="Descripción de la imagen" />
        <img src={Odc6} alt="Descripción de la imagen" />
      </div>
      <div className='txt-container'>
      <h3><span>Orange</span> Digital Center es Tu Espacio</h3>
      <h3 className='odc-txt'>
        Inclusión, Colaboración, Co-Creación, Aprendizaje. Orange Digital Center Madrid es un proyecto de la <span>Fundación</span> Orange 
        que nace con el objetivo de favorecer la <span>inclusión</span> y la accesibilidad al empleo de las personas más vulnerables, 
        reduciendo la brecha digital. Un espacio dinámico e innovador para una sociedad que quiere avanzar a través de la tecnología, 
        la formación y el emprendimiento. <span>¡Bienvenidos!</span>
      </h3>
      </div>
    </div>
  );
};

export default DiscoverODC;

