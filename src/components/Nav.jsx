import { Link } from "react-router-dom";

import './styles/Nav.css';

const Nav = () => {
    return (
        <nav className="main-nav">
            <Link className="logo" to="/">
                <div className="logo-grid">
                    <span>O</span><span>S</span>
                    <span>L</span><span>O</span>
                </div>
                <span className="logo-caption">Norway</span>
            </Link>

            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/video">Video</Link>
                <Link to="/map">Map</Link>
            </div>
        </nav>
    );
};

export default Nav;
