import "./index.css"
import Navigasi from "../../models/Navigasi"
import Footer from "../../models/footer"
import Pencarian from "../../models/Pencarian"
import Hasil from "./headerHasil"
import { useState } from "react"

export default function HasilPencarian() {
    const [data, setData] = useState(null)
    
    function showHasil(res) {
        setData(res)    
    }

    return (
        <>
            <Navigasi />
            <div className="headerHasilPencarian"></div>
            <Pencarian setShowHasil={showHasil}  value="hello" />
            <Hasil data={data} />
            <Footer />
        </>
    )
}