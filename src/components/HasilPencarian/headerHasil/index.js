import "./index.css"

export default function HeaderHasil() {
    return (
        <div id="headerHasil">
        <section className="hasil-pencarian" id="hasil-pencarian">
                <div className="container">
                    <div className="card me-5">
                        <img src={require("./mobil6.jpg")} className="card-img-top" alt="Kemeja Adj"/>
                        <div className="card-body">
                            <h5 className="card-title">HotWheels</h5>
                            <p className="card-text">Rp 500.000 / hari</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button><a href="#" className="btn">Pilih Mobil</a></button>
                        </div>
                    </div>
                    
                    <div className="card me-5">
                        <img src={require("./mobil5.jpg")} className="card-img-top" alt="Kemeja Adj"/>
                        <div className="card-body">
                            <h5 className="card-title">HotWheels</h5>
                            <p className="card-text">Rp 500.000 / hari</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button><a href="#" className="btn">Pilih Mobil</a></button>
                        </div>
                    </div>
                    
                    <div className="card">
                        <img src={require("./mobil4.jpg")} className="card-img-top" alt="Kemeja Putih Hitam Garis" />
                        <div className="card-body">
                            <h5 className="card-title">HotWheels</h5>
                            <p className="card-text">Rp 500.000 / hari</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                            <button><a href="#" className="btn">Pilih Mobil</a></button>
                        </div>
                    </div>
                </div>
                
            </section>
        </div>
        )
        }
