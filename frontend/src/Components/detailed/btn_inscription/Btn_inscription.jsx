import './Btn_inscription.css';
import { Link } from 'react-router-dom';


const Btn_inscription = ({ URL, activity_id }) => {
  return (
    <Link className='btn_inscription' to={`${URL}/${activity_id}`} value= {`${activity_id}`}>
      Inscripción
    </Link>
  );
};

export default Btn_inscription;
