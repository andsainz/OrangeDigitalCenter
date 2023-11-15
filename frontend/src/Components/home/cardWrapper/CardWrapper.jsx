import PropTypes from 'prop-types';
import Cards from "../Cards/Cards";
import './CardWrapper.css';

function CardWrapper({ cardsData }) {
    return (
        <section className="card-wrapper">
            {cardsData.map((data, index) => (
                <Cards
                    key={index}
                    activity_image={data.activity_image}
                    act_description={data.act_description}
                    activity_date={data.activity_date}
                    start_time={data.start_time}
                    end_time={data.end_time}
                    activity_title={data.activity_title}
                    link={data.link}
                />
            ))}
        </section>
    );
}

CardWrapper.propTypes = {
    cardsData: PropTypes.arrayOf(PropTypes.shape({
        activity_image: PropTypes.string.isRequired,
        act_description: PropTypes.string.isRequired,
        activity_date: PropTypes.string.isRequired,
        start_time: PropTypes.string.isRequired,
        end_time: PropTypes.string.isRequired,
        activity_title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
    })).isRequired,
};

export default CardWrapper;
