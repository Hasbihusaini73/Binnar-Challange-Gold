import "./index.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import React from "react"

export default function Pencarian(props) {
    const [nama, setNama] = useState("")
    const [kapasitas, setKapasitas] = useState(null)
    const [harga, setHarga] = useState(null)
    const [status, setStatus] = useState(null)

    const submitPencarian = () => {
        const data = {
            nama, kapasitas, harga, status
        }
        
        props.setShowHasil(data)
    }

    return (
        <div id="pencarian">
            <section className="pencarian">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="container-option me-3">
                                <div className="form-floating-md mb-3">
                                    <label htmlFor="inputNama" className="form-label">Nama Mobil</label>
                                    <input type="name" className=" form form-control" id="floatingInput" placeholder="Honda Civic" onChange={e => setNama(e.target.value)} />
                                </div>
                            </div>
                            <div className="container-option me-3">
                                <label htmlFor="inputKategori" className="form-label">Kategori</label>
                                <select className="form-select form-select-md" aria-label=".form-select-sm example" 
                                onChange={e => setKapasitas(e.target.value)}
                                >
                                    <option value={null}>Masukan Kapasitas Mobil</option>
                                    <option value="large">2-4 Orang</option>
                                    <option value="medium">4-6 Orang</option>
                                    <option value="small">6-8 Orang</option>
                                </select>
                            </div>
                            <div className="container-option me-3">
                                <label htmlFor="inputStatus" className="form-label">Harga</label>
                                <select className="form-select form-select-md" aria-label=".form-select-sm example" onChange={e => setHarga(e.target.value)}>
                                    <option value={null}>Masukan Harga Sewa</option>
                                    <option value={400000}> {"<Rp.400.000"} </option>
                                    <option value={{awal: 400000, akkhir: 600000}}> {"Rp.400.000 - Rp.600.000"} </option>
                                    <option value={400000}> {"<Rp.400.000"} </option>
                                </select>
                            </div>
                            <div className="container-option me-3">
                                <label htmlFor="inputHaga" className="form-label">Status</label>
                                <select className="form-select form-select-md" aria-label=".form-select-sm example" onChange={e => setStatus(e.target.value)}>
                                    <option value={true}>Disewa</option>
                                    <option value={false}>Tidak disewa</option>

                                </select>
                            </div>
                            <div className="btn-input ml-1 mt-4">
                                <button onClick={submitPencarian} ><Link href="#" className="sewa">Cari Mobil</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}