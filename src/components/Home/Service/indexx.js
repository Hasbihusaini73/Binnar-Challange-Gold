import "./index.css"

export default function Service() {
    return (
        <div id="Service">
            <section className="service mt-5" id="service">
            <div className="container h-100">
            <div className="row h-100">
                <div className="col-lg-6 position-relative">
                <div className="image">
                    <img src={require("./our-services.png")} className="img-fluid mt-3" alt="gambar-service"/>
                </div>
                </div>
                <div className="col-lg-6 mt-5 fw-bold">
                <h1>Best Car Rental for any kind of trip in (Jakarta)!</h1>
                <p>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                <ul>
                    <li>
                    <i className="fa-solid fa-check me-3 mb-3"></i>Sewa Mobil Dengan Supir di
                    Jakarta 12 Jam
                    </li>
                    <li>
                    <i className="fa-solid fa-check me-3 mb-3"></i>Sewa Mobil Lepas Kunci di Jakarta
                    24 Jam
                    </li>
                    <li>
                    <i className="fa-solid fa-check me-3 mb-3"></i>Sewa Mobil Jangka Panjang Bulanan
                    </li>
                    <li>
                    <i className="fa-solid fa-check me-3 mb-3"></i>Gratis Antar-Jemput Mobil di
                    Bandara
                    </li>
                    <li>
                    <i className="fa-solid fa-check me-3 mb-3"></i>Layanan Airport Transfer / Drop
                    In Out
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
}