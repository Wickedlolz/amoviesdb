import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';
import { BoxArrowDownLeft } from 'react-bootstrap-icons';

function NavBar() {
    const { user, isAuthenticated } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const guestUserNav = (
        <>
            <Navbar.Text>
                <Nav.Link to={'/signin'} as={NavLink}>
                    Sign In
                </Nav.Link>
            </Navbar.Text>

            <Navbar.Text>
                <Nav.Link to={'/signup'} as={NavLink}>
                    Sign Up
                </Nav.Link>
            </Navbar.Text>
        </>
    );

    const onSubmtSearch = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const search = formData.get('search').trim();

        navigate('/catalog?search=' + search);
    };

    const authUserNav = (
        <Nav.Link to={'/create'} as={NavLink}>
            Create
        </Nav.Link>
    );

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <img
                        src="/images/clipart88403.png"
                        width="20"
                        height="20"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand to={'/'} as={NavLink}>
                    AMoviesDB
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to={'/home'} as={NavLink}>
                            Home
                        </Nav.Link>
                        <Nav.Link to={'/catalog?page=1'} as={NavLink}>
                            Catalog
                        </Nav.Link>
                        <Nav.Link to={'/people'} as={NavLink}>
                            People
                        </Nav.Link>
                        {isAuthenticated ? authUserNav : null}
                        <Nav.Link to={'/about'} as={NavLink}>
                            About
                        </Nav.Link>
                    </Nav>
                    {isAuthenticated ? (
                        <>
                            <Navbar.Text>
                                Signed in as:{' '}
                                <NavLink to={'/profile/' + user.id}>
                                    {user.firstName} {user.lastName}
                                </NavLink>
                            </Navbar.Text>
                            <Navbar.Text>
                                <Nav.Link to={'/signout'} as={NavLink}>
                                    <BoxArrowDownLeft /> Sign Out
                                </Nav.Link>
                            </Navbar.Text>
                        </>
                    ) : (
                        guestUserNav
                    )}

                    {location.pathname === '/catalog' ? (
                        <Form className="d-flex" onSubmit={onSubmtSearch}>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="me-2"
                                name="search"
                                aria-label="Search"
                            />
                            <Button type="submit" variant="outline-success">
                                Search
                            </Button>
                        </Form>
                    ) : null}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
