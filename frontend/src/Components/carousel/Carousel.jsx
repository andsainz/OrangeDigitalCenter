import Carousel from "react-bootstrap/Carousel";
import carousel1 from "../../assets/carousel/carousel1.png";
import carousel2 from "../../assets/carousel/carousel2.png";
import carousel3 from "../../assets/carousel/carousel3.png";
import carousel4 from "../../assets/carousel/carousel4.png";
import carousel5 from "../../assets/carousel/carousel5.png";
import carousel6 from "../../assets/carousel/carousel6.png";
import { Link } from "react-router-dom";
import "./Carousel.css";

const carouselImages = [carousel1, carousel2, carousel3, carousel4, carousel5, carousel6];

function CarouselComponent() {
    return (
        <Carousel className="mb-3">
            {carouselImages.map((image, index) => (
                <Carousel.Item key={index} style={{ color: "black" }}>
                    <img
                        src={image}
                        className="img-fluid"
                        alt="Carousel image"
                        width="100%"
                    />
                    <Carousel.Caption className="d-flex justify-content-center">
                    <Link to={`/odc`}><button className='discover-btn'>Conócenos</button></Link>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}

export default CarouselComponent;

