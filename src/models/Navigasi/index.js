import "./index.css"


export default function Navigasi() {
    return (
        <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container ">
                        <div className="container-logo">
                            <div className="logo"></div>
                        </div>
                            <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                                <div className="navbar-nav fw-bold">
                                <a className="nav-link me-3" href="#service">OUR SERVICE</a>
                                <a className="nav-link me-3" href="#whyUs">WHY US</a>
                                <a className="nav-link me-3" href="#testimoni">TESTIMONIAL</a>
                                <a className="nav-link me-3" href="#faq">FAQ</a>
                                </div>
                            </div>
                    </div>
          </nav>
        </div>
    )
}

