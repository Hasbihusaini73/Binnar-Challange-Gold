import "./index.css"
import Navigasi from "../../models/Navigasi"
import Footer from "../../models/footer"
import Pencarian from "../../models/Pencarian"
import Detail from "./Detail"

export default function DetailProduk() {
    return (
        <>
            <Navigasi />
            <div class="headerDetailProduk"></div>
            <Pencarian />
            <Detail />
            <Footer />
        </>
    )
}