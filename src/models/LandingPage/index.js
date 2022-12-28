import "./index.css"
import { Link } from "react-router-dom"


export default function LandingPage() {
    return (
        <div id="landingPage">
                <section className="home mt-5" id="home">
                    <div className="container h-100">
                        <div className="row h-100 fw-bold">
                            <div className="kotak col-lg-6">
                                <h1 className="heading">Sewa & Rental Mobil Terbaik di kawasan (JAKARTA)</h1>
                                <p className="subHeading mt-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                                <div className="btn-home mt-5">
                                    <button><Link to="/CariMobil" className="sewa">Mulai Sewa Mobil</Link></button>
                                </div>
                            </div>
                            <div className="container-image col-lg-6 position-relative">
                            <div className="banner-image">
                                <img src={require("./Mobil.png")}  className="img-fluid position-absolute mt-5" alt="mobil" height={100} />
                            </div>
                            </div>
                        </div>
                    </div>  
                </section>

        </div>
    )
}