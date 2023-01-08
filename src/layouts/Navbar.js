import { NavLink, Link } from "react-router-dom";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/newproduct">
                Crown
            </Link>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink
                        className="nav-item nav-link "
                        activeclassname="active"
                        id="home"
                        to="/"
                    >
                        Home
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link "
                        activeclassname="active"
                        id="home"
                        to="/products"
                    >
                        Products
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        activeclassname="active"
                        id="about"
                        to="/about"
                    >
                        About
                    </NavLink>
                    <NavLink
                        className="nav-item nav-link"
                        activeclassname="active"
                        id="contact"
                        to="/contact"
                    >
                        Contact
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
export default Navbar;
