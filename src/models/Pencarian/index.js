import "./index.css"
import { Link} from "react-router-dom"
import { useEffect, useState } from "react"
import React from "react"
import axios from "axios"

export default function Pencarian(props) {
    const [nama, setNama] = useState("")
    const [kapasitas, setKapasitas] = useState("")
    const [harga, setHarga] = useState({awal: 0, akhir: 400000})
    const [status, setStatus] = useState(false)
    const [DataAPI, setDataAPI] = useState(null)
    
    useEffect(() => {
                
        axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car", {
            "headers": {
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
            }}).then(res => {
                setDataAPI(res.data.cars)
                
            })
    }, [])


    const submitPencarian = () => {
        const data = {
            nama, kapasitas, harga, status
        }
        console.log(DataAPI)
        const hasil = DataAPI.filter(item => {
            return item.name.includes(nama) &&  item.category === kapasitas && item.status === status 
        })
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
                                    <option value={""}>Masukan Kapasitas Mobil</option>
                                    <option value="small">2-4 Orang</option>
                                    <option value="medium">4-6 Orang</option>
                                    <option value="large">6-8 Orang</option>
                                </select>
                            </div>
                            <div className="container-option me-3">
                                <label htmlFor="inputStatus" className="form-label">Harga</label>
                                <select className="form-select form-select-md" aria-label=".form-select-sm example" onChange={e => setHarga(e.target.value)}>
                                    <option value={{awal: 0, akhir: 0}}>Masukan Harga Sewa</option>
                                    <option value={{awal: 0, akhir: 400000}}> {"<Rp.400.000"} </option>
                                    <option value={{awal: 400000, akkhir: 600000}}> {"Rp.400.000 - Rp.600.000"} </option>
                                    <option value={{awal: 0, akhir: 400000}}> {"<Rp.400.000"} </option>
                                </select>
                            </div>
                            <div className="container-option me-3">
                                <label htmlFor="inputHaga" className="form-label">Status</label>
                                <select className="form-select form-select-md" aria-label=".form-select-sm example" onChange={e => setStatus(e.target.value)}>
                                    <option value={false}>Disewa</option>
                                    <option value={true}>Tidak disewa</option>

                                </select>
                            </div>
                            <div className="btn-input ml-1 mt-4">
                                <button onClick={submitPencarian} ><Link  className="sewa">Cari Mobil</Link></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}