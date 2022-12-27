import "./index.css"
import Navigasi from "../../models/Navigasi"
import Footer from "../../models/footer"
import Pencarian from "../../models/Pencarian"
import Detail from "./Detail"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
export default function DetailProduk() {
    const {id} = useParams()
    
    return (
        <>
            <Navigasi />
            <div className="headerDetailProduk"></div>
            <Pencarian />
            <Detail id={id} />
            <Footer />
        </>
    )
}