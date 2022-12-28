import "./index.css"
import Navigasi from "../../models/Navigasi"
import Footer from "../../models/footer"
import Pencarian from "../../models/Pencarian"
import Hasil from "./headerHasil"
import { useState } from "react"

export default function HasilPencarian() {
    const [onDesainData, setOnDesainData] = useState(false)
    const [data, setData] = useState(null)
    
    function showHasil(res) {
        setOnDesainData(true)
        setData(res)
    }

    return (
        <>
            <Navigasi />
            <div className="headerHasilPencarian"></div>
            <Pencarian setShowHasil={showHasil}  value="hello" />
            {onDesainData && <Hasil data={data} /> }
            <Footer />
        </>
    )
}