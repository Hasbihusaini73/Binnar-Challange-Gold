import "./index.css"
import {Link} from "react-router-dom"
function SewaMobil() {
    return (
        <div id="sewaMobil">
                <section class="sewa-mobil mt-5" id="sewa-mobil">
                <div class="container">
                    <div class="row">
                    <div class="col fw-bold">
                        <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button><Link to="/CariMobil">Mulai Sewa Mobil</Link></button>
                    </div>
                    </div>
                </div>
                    </section>

        </div>
    )
}

export default SewaMobil