import "./index.css"

export default function Detail() {
    return (
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
                                    <img src={require("./mobil5.jpg")} className="card-img-top" alt="Kemeja Adj" />
                                    <div className="card-body">
                                        <h5 className="card-title">HotWheels</h5>
                                        <div className="card-text">
                                        <i className='bx bxs-group bx-sm'></i><span>6 - 8 Orang</span>
                                        </div>
                                        <p>Total <span className="harga">Rp.500.000</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </div>
    )
}