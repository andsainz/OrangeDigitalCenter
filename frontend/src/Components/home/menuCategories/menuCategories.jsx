
import { Navbar, Nav } from 'react-bootstrap';
import './MenuCategories.css';

const MenuCategories = () => {
    return (
        <Navbar className="menu-categories-navbar" expand="lg">
            <Nav>
                <Nav.Link href="#talleres" className="menu-categories-nav-link">Talleres</Nav.Link>
                <Nav.Link href="#cursos" className="menu-categories-nav-link">Cursos</Nav.Link>
                <Nav.Link href="#eventos" className="menu-categories-nav-link">Eventos</Nav.Link>
                <Nav.Link href="#actividades" className="menu-categories-nav-link">Actividades</Nav.Link>
            </Nav>
        </Navbar>
    );
};

export default MenuCategories;

