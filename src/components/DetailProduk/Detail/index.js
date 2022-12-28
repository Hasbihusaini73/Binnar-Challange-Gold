import { useEffect, useState } from "react"
import "./index.css"
import axios from "axios"
export default function Detail(props) {
    const {id} = props
    const [data, setData] = useState(null) 
    const urlApi =  !id ? "https://bootcamp-rent-cars.herokuapp.com/admin/car/904" :  `https://bootcamp-rent-cars.herokuapp.com/admin/car/${id}`
    useEffect(() => {
        console.log(id)
        axios.get(urlApi, {
            "headers": {
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
            }}).then(res => {
                setData(res.data)


            })
    }, [])
    return (
        <>
        {data === null ? (<p className="dataNull"> Data Tidak Ditemukan </p>) : 
        <div id="Detail">
        <section className="detail-produk mb-5" id="detail-produk">
                <div className="container">
                    <div className="row">
                        <div className="kolom1 col-lg-6">
                            <div className="detail-teks">
                                <h5>Tentang Paket</h5>
                                    <ul>
                                        <li>Apa saja yang termasuk paket misal durasi max 12 Jam</li>
                                        <li>Sudah termasuk bensin selama 12 Jam</li>
                                        <li>Sudah termasuk tiket wisata</li>
                                        <li>sudah termasuk pajak</li>
                                    </ul>
                                <h5>Exclude</h5>
                                    <ul>
                                        <li>Tidak termasuk biaya makan supir Rp.75.000/hari</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                    </ul>
                                <h5>Refund, Reschedule, Overtime</h5>
                                    <ul>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                        <li>Tidak termasuk biaya makan sopir Rp 75.000/hari</li>
                                        <li>Jika overtime lebih dari 12 jam akan ada tambahan biaya Rp 20.000/jam</li>
                                        <li>Tidak termasuk akomodasi penginapan</li>
                                    </ul>
                            </div>
                        </div>
                        <div className="kolom2 col-lg-6">
                            <div className="card me-5">
                                <img src={data.image} className="card-img-top" alt="Kemeja Adj" />
                                <div className="card-body">
                                    <h5 className="card-title">{data.name}</h5>
                                    <div className="card-text">
                                    <i className='bx bxs-group bx-sm'></i><span>6 - 8 Orang</span>
                                    </div>
                                    <p>Total <span className="harga">{data.price}</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
        }
        </>
    )
}