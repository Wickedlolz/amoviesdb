import { Facebook, Twitter, Instagram } from 'react-bootstrap-icons';
import styles from './Footer.module.css';

function Footer() {
    return (
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
            <div className="col-md-4 d-flex align-items-center">
                <a
                    href="/"
                    className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                >
                    <img
                        className={styles['footer-logo']}
                        src="/images/clipart88403.png"
                        alt="logo"
                    />
                </a>
                <span className="text-muted">© 2022 AMoviesDB, Inc</span>
            </div>

            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
                <li className="ms-3">
                    <a className="text-muted" href="#/">
                        <Twitter />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="#/">
                        <Instagram />
                    </a>
                </li>
                <li className="ms-3">
                    <a className="text-muted" href="#/">
                        <Facebook />
                    </a>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;
