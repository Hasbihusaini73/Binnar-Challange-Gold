import "./index.css"
import {Link} from "react-router-dom" 

export default function Navigasi() {
    return (
        <div id="Navbar">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container ">
                    <div className="logo"></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav fw-bold">
                        <Link className="nav-link me-3" to="/#Service">OUR SERVICE</Link>
                        <Link className="nav-link me-3" to="/#whyUs">WHY US</Link>
                        <Link className="nav-link me-3" to="/#testimoni">TESTIMONIAL</Link>
                        <Link className="nav-link me-3" to="/#faq">FAQ</Link>
                        </div>
                    </div>
                    </div>
                </nav>
        </div>
    )
}

