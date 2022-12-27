import "./index.css"
import Navigasi from "../../models/Navigasi";
import LandingPage from "../../models/LandingPage";
import Footer from "../../models/footer";
import Pencarian from "../../models/Pencarian"


function CariMobil() {
    return (
        <>
            <Navigasi />
            <LandingPage />
            <Pencarian />
            <Footer />

        </>
    )
}

export default CariMobil;
