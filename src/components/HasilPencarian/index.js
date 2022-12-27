import "./index.css"
import Navigasi from "../../models/Navigasi"
import Footer from "../../models/footer"
import Pencarian from "../../models/Pencarian"
import HeaderHasil from "./headerHasil"

export default function HasilPencarian() {
    return (
        <>
            <Navigasi />
            <div className="headerHasilPencarian"></div>
            <Pencarian />
            <HeaderHasil />
            <Footer />
        </>
    )
}