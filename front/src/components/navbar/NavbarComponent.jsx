import { Container, Nav, Navbar } from 'react-bootstrap'
import CameraOutlinedIcon from '@mui/icons-material/CameraOutlined';
import style from './NavbarComponent.module.css'
import { NavLink } from 'react-router-dom';


export const NavbarComponent = () => {
    return (
        <Navbar bg="dark" variant="dark" className={style.app_navbar}>
            <Container className={style.app_navbar_content}>
                <Navbar.Brand href="#home"><CameraOutlinedIcon className={style.app_icon} />PhotoBooth</Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link>
                        <NavLink
                            to="/profile"
                            className={(state) => state.isActive ? style.active : style.nav_link}
                        >My Profile
                        </NavLink>
                    </Nav.Link>
                    <Nav.Link>
                        <NavLink
                            to="/friends"
                            activeClassName={style.active}
                            className={(state) => state.isActive ? style.active : style.nav_link}
                            >
                            Friends
                        </NavLink>
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}
