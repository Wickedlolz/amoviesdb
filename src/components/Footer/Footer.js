import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';

function Footer() {
    return (
        <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div class="col-md-4 d-flex align-items-center">
                <a
                    href="/"
                    class="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                >
                    <img
                        src="/images/clipart88403.png"
                        width="23"
                        height="22"
                        alt="logo"
                    />
                </a>
                <span class="text-muted">© 2022 AMoviesDB, Inc</span>
            </div>

            <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li class="ms-3">
                    <a class="text-muted" href="#/">
                        <Twitter />
                    </a>
                </li>
                <li class="ms-3">
                    <a class="text-muted" href="#/">
                        <Instagram />
                    </a>
                </li>
                <li class="ms-3">
                    <a class="text-muted" href="#/">
                        <Facebook />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
