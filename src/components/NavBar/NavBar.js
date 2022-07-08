import { useContext } from 'react';
import { AuthContext } from '../../contexts/Auth';
import { NavLink } from 'react-router-dom';
import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

const guestUserNav = (
    <>
        <Nav.Link to={'/signin'} as={NavLink}>
            Sign In
        </Nav.Link>
        <Nav.Link to={'/signup'} as={NavLink}>
            Sign Up
        </Nav.Link>
    </>
);

const authUserNav = (
    <>
        <Nav.Link to={'/create'} as={NavLink}>
            Create
        </Nav.Link>
        <Nav.Link to={'/logout'} as={NavLink}>
            Logout
        </Nav.Link>
    </>
);

function NavBar() {
    const { user } = useContext(AuthContext);

    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand>
                    <img
                        src="/images/clipart88403.png"
                        width="30"
                        height="30"
                        alt="logo"
                    />
                </Navbar.Brand>
                <Navbar.Brand>AMoviesDB</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link to={'/'} as={NavLink}>
                            Home
                        </Nav.Link>
                        {!user ? guestUserNav : authUserNav}
                        <Nav.Link to={'/about'} as={NavLink}>
                            About
                        </Nav.Link>
                    </Nav>
                    {user ? (
                        <Navbar.Text className="p-3">
                            Signed in as:{' '}
                            <NavLink to={'/profile/' + user.id}>
                                {user.firstName} {user.lastName}
                            </NavLink>
                        </Navbar.Text>
                    ) : null}
                    <Form className="d-flex">
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
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
