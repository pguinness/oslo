import { Link } from "react-router-dom";
import './styles/Footer.css';

const Footer = ({ variant = 'light' }) => {
    return (
        <footer className={`site-footer footer-${variant}`}>
            <div className="container footer-inner">

                <div className="footer-brand">
                    <div className="logo-grid">
                        <span>O</span><span>S</span>
                        <span>L</span><span>O</span>
                    </div>
                    <span className="footer-location">Norway</span>
                </div>

                <p className="footer-text">
                    Where Nature Meets Nordic Luxury
                </p>

                {/* Footer navigation */}
                <nav className="footer-nav">
                    <Link to="/">Home</Link>
                    <Link to="/video">Video</Link>
                    <Link to="/map">Map</Link>
                </nav>

                <span className="footer-meta">
                    <a
                        href="https://www.youtube.com/watch?v=A4Fr5uYVZ_U"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Sound
                    </a>{' '}
                    inspired by{' '}
                    <a
                        href="https://open.spotify.com/artist/1Xyo4u8uXC1ZmMpatF05PJ"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        The Weeknd
                    </a>{' '}
                    — educational use only
                </span>

                <span className="footer-meta">
                    &copy; 2026 Paul Guinness. All rights reserved.
                </span>

            </div>
        </footer>
    );
};

export default Footer;
