import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
} from 'react-bootstrap';

function NavBar() {
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
                        <Nav.Link to={'/'} as={Link}>
                            Home
                        </Nav.Link>
                        <Nav.Link to={'/signin'} as={Link}>
                            Sign In
                        </Nav.Link>
                        <Nav.Link to={'/signup'} as={Link}>
                            Sign Up
                        </Nav.Link>
                    </Nav>
                    <Navbar.Text className="p-3">
                        Signed in as:{' '}
                        <Link to={'/profile/24'}>Viktor Dimitrov</Link>
                    </Navbar.Text>
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
