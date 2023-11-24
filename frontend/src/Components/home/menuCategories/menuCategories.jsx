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
        <div className="menu-categories-navbar">
                {categories.map((category) => (
                    <div
                        key={category.id}
                        onClick={() => onCategoryClick(category.name)}
                        className="menu-categories-nav-link"
                    >
                        {category.name}
                    </div>
                ))}
        </div>
    );
};

export default MenuCategories;
