import PropTypes from "prop-types";
import "./Cards.css";

import { useNavigate } from 'react-router-dom';

function Cards({ activity_image, act_description, activity_date, start_time, end_time, activity_title, link, activity_id }) {
    const navigate = useNavigate();

    const handleClickBtn = () => {
        navigate(`/activities/${activity_id}`);
    };

    return (
        <article className="card-container">
            <img src={activity_image} alt="Activity" className="card-image" />
            <div className="card-date">
                <time dateTime={activity_date}>{activity_date}</time>
            </div>
            <div className="card-time">
                <span>{`${start_time} - ${end_time}`}</span>
            </div>
            <h2 className="card-title">{activity_title}</h2>
            <p className="card-description">{act_description}</p>
            <button onClick={handleClickBtn} className="card-button">
                Leer más
            </button>
        </article>
    );
}

Cards.propTypes = {
    activity_image: PropTypes.string.isRequired,
    act_description: PropTypes.string.isRequired,
    activity_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    activity_title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Cards;
