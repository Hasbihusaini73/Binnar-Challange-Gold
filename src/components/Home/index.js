import Navigasi from "../../models/Navigasi"
import LandingPage from "../../models/LandingPage"
import Footer from "../../models/footer"
import Service from "./Service/indexx"
import WhyUs from "./whyUs"
import Faq from "./Faq"
import Testimoni from "./Testimoni"
import SewaMobil from "./SewaMobil"

export default function Home() {
    return (
        <>
            <Navigasi />
            <LandingPage />
            <Service />
            <WhyUs />
            <Testimoni />
            <SewaMobil />
            <Faq />
            <Footer />
        </>
    )
}