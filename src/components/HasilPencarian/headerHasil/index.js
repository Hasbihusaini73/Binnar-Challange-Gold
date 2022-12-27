import "./index.css"
import { useState, useEffect } from "react"
import axios from "axios"

export default function HeaderHasil() {
    const [data, setData] = useState([])
    
    useEffect(() => {
        axios.get("https://bootcamp-rent-cars.herokuapp.com/admin/v2/car", {
            "headers": {
                "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGJjci5pbyIsInJvbGUiOiJBZG1pbiIsImlhdCI6MTY2NTI0MjUwOX0.ZTx8L1MqJ4Az8KzoeYU2S614EQPnqk6Owv03PUSnkzc"
            }}).then(res => {
                setData(res.data.cars)
                console.log(res.data.cars)
            })
    }, [])
    return (
        <div id="headerHasil">
        <section className="hasil-pencarian" id="hasil-pencarian">
                <div className="container">
                    {data.length > 0 ? (data.map(item => (
                        <div key={item.id} className="card me-5">
                        <img src={item.image} className="card-img-top" alt="Kemeja Adj" width={100}/>
                        <div className="card-body">
                            <h5 className="card-title">{item.name}</h5>
                            <p className="card-text">{item.price}/ hari</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button><a href="#" className="btn">Pilih Mobil</a></button>
                        </div>
                    </div>
                    ))) : <p>Data Kosong</p>}
                    
                </div>
                
            </section>
        </div>
        )
        }
