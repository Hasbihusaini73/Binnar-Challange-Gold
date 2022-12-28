import "./index.css"
import {Link} from "react-router-dom" 

export default function Navigasi() {
    const handleScrollTop = () => {
        window.scrollTo(0, 0);
      }
      const handleClick = () => {
        const element = document.getElementById('services, whyus, testi, faq');
        element.scrollIntoView({ behavior: 'smooth' });
      };

    return (
        <div id="Navbar mb-5">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <div className="container ">
                    <div className="logo"></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav fw-bold">
                        <Link onClick={handleClick} className="nav-link me-3" to="/#Service">OUR SERVICE</Link>
                        <Link onClick={handleClick} className="nav-link me-3" to="/#whyUs">WHY US</Link>
                        <Link onClick={handleClick} className="nav-link me-3" to="/#testimoni">TESTIMONIAL</Link>
                        <Link onClick={handleClick} className="nav-link me-3" to="/#faq">FAQ</Link>
                        </div>
                    </div>
                    </div>
                </nav>
        </div>
    )
}

