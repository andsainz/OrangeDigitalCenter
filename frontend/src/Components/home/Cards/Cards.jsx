import PropTypes from 'prop-types';
import './Cards.css';

function Cards({ 
    activity_image, 
    activity_description = "Descripción no disponible",
    activity_date, 
    start_time, 
    end_time, 
    activity_title, 
    link 
}) {
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
            <p className="card-description">{activity_description}</p>
            <a href={link} className="card-button">Leer más</a>
        </article>
    );
}

Cards.propTypes = {
    activity_image: PropTypes.string.isRequired,
    activity_description: PropTypes.string,
    activity_date: PropTypes.string.isRequired,
    start_time: PropTypes.string.isRequired,
    end_time: PropTypes.string.isRequired,
    activity_title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

export default Cards;
