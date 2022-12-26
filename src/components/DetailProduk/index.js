import "./index.css"

function DetailProduk(props) {

    const currentValue = props.curentValue || "DEFAULT";
    return (
        <>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark">
                    <div className="container ">
                    <div className="logo"></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                        <div className="navbar-nav fw-bold">
                        <a className="nav-link me-3" href="index.html">OUR SERVICE</a>
                        <a className="nav-link me-3" href="#whyUs">WHY US</a>
                        <a className="nav-link me-3" href="#testimoni">TESTIMONIAL</a>
                        <a className="nav-link me-3" href="#faq">FAQ</a>
                        </div>
                    </div>
                    </div>
                </nav>
            </header>

            {/* <!-- HOME --> */}
            <section className="home" id="home">
                <div className="container">
                    <div className="row">
                        <div className="col">
                        </div>
                    </div>
                </div>
            </section>

            {/* <!-- CARI-MOBIL --> */}
                <section className="pencarian" id="pencarian">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="text">
                                    <h5>Pencarianmu</h5>
                                </div>
                                <div className="input0">
                                    <div className="form-floating-md mb-3">

                                        <label htmlFor="inputNama" className="form-label">Nama Mobil</label>
                                        <input type="name" className=" form form-control" id="floatingInput" placeholder="Honda Civic" />
                                    </div>
                                </div>
                                <div className="input1">
                                    <label htmlFor="inputKategori" className="form-label">Kategori</label>
                                    <select  className="form-select form-select-md" aria-label=".form-select-sm example">
                                        <option value="DEFAULT" >Masukan Kapasitas Mobil</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="input2">
                                    <label htmlFor="inputHaga" className="form-label">Harga</label>
                                    <select  className="form-select form-select-md" aria-label=".form-select-sm example">
                                        <option value="DEFAULT" >Masukan Harga Sewa</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="input3 ">
                                    <label htmlFor="inputStatus" className="form-label">Status</label>
                                    <select  className="form-select form-select-md" aria-label=".form-select-sm example">
                                        <option value="DEFAULT" >Disewa</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>
                                <div className="btn-input ml-1 mt-4">
                                    <button><a href="#" className="sewa">Cari Mobil</a></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            {/* <!-- DETAIL PRODUK --> */}
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
                                    <img src={require("./mobil5.jpg")} className="card-img-top" alt="Kemejaasas"  />
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

                        {/* <!-- FOOTER --> */}
                        <section className="footer mt-5" id="footer">
                            <div className="container">
                            <div className="row">
                                <div className="kolom col-lg-3">
                                <p className="paragrap1 mt-2 fw-bold">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                                <p className="paragrap1 mt-2 fw-bold" >binarcarrental@gmail.com</p>
                                <p className="paragrap1 mt-2 fw-bold">081-233-334-808</p>
                                </div>
                                <div className="kolom col-lg-3">
                                <p className="paragrap2 mt-2">Our services</p>
                                <p className="paragrap2 mt-2">Why Us</p>
                                <p className="paragrap2 mt-2 ">Testimoni</p>
                                <p className="paragrap2 mt-2 ">FAQ</p>
                                </div>
                                <div className="kolom col-lg-3">
                                <p className="paragrap3 mt-2 fw-bold">Connect with us</p>
                                <a href="#"><i className='bx bxl-facebook-circle bx-sm me-2'></i></a>
                                <a href="#"><i className='bx bxl-instagram-alt bx-sm me-2' ></i></a>
                                <a href="#"><i className='bx bxl-twitter bx-sm me-2'></i></a>
                                <a href="#"><i className='bx bxs-envelope bx-sm me-2' ></i></a>
                                <a href="#"><i className='bx bxs-message-dots bx-sm me-2'></i></a>
                                </div>
                                <div className="kolom col-lg-3">
                                <p className="paragrap4 mt-2 fw-bold">Copyright Binar 2022</p>
                                <div className="logo"></div>
                                </div>
                            </div>
                            </div>
                        </section>
        </>
    )
}

export default DetailProduk