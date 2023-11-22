import { Navbar, Nav } from 'react-bootstrap';
import './MenuCategories.css';
import { activitiesService } from '../../../services/ActivitiesService';

const MenuCategories = ({ onCategoryClick }) => {
    const categories = [
        { id: 1, name: "Emprendimiento" },
        { id: 2, name: "Fabricación digital" },
        { id: 3, name: "Programación" },
        { id: 4, name: "Digitalización" },
        { id: 5, name: "Otros" },
    ];

    
    return (
        <Navbar className="menu-categories-navbar" expand="lg">
            <Nav>
                {categories.map((category) => (
                    <Nav.Link
                        key={category.id}
                        onClick={() => onCategoryClick(category.name)}
                        className="menu-categories-nav-link"
                    >
                        {category.name}
                    </Nav.Link>
                ))}
            </Nav>
        </Navbar>
    );
};

export default MenuCategories;
