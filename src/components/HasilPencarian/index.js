import "./index.css"

function HasilPencarian() {
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

    <section className="home" id="home">
        <div className="container">
            <div className="row">
                <div className="col">
                </div>
            </div>
        </div>
    </section>

    <section className="pencarian" id="pencarian">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="input0 me-3">
                        <div className="form-floating-md mb-3">
                            <label htmlFor="inputNama" className="form-label">Nama Mobil</label>
                            <input type="name" className=" form form-control" id="floatingInput" placeholder="Honda Civic"/>
                        </div>
                    </div>
                    <div className="input1 me-3">
                        <label htmlFor="inputKategori" className="form-label">Kategori</label>
                        <select className="form-select form-select-md" aria-label=".form-select-sm example">
                            <option value="4">Masukan Kapasitas Mobil</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                    </div>
                    <div className="input2 me-3">
                        <label htmlFor="inputHaga" className="form-label">Harga</label>
                        <select className="form-select form-select-md" aria-label=".form-select-sm example">
                            <option value="4">Masukan Harga Sewa</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                          </select>
                    </div>
                    <div className="input3 me-3">
                        <label htmlFor="inputStatus" className="form-label">Status</label>
                        <select className="form-select form-select-md" aria-label=".form-select-sm example">
                            <option value="4">Disewa</option>
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

    <section className="hasil-pencarian" id="hasil-pencarian">
        <div className="container">
            <div className="card me-5">
                <img src={require=("./mobil6.jpg")} className="card-img-top" alt="Kemeja Adj" />
                <div className="card-body">
                    <h5 className="card-title">HotWheels</h5>
                    <p className="card-text">Rp 500.000 / hari</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                    <button><a href="#" className="btn">Pilih Mobil</a></button>
                </div>
            </div>
             
            <div className="card me-5">
                <img src={require("./mobil5.jpg")} className="card-img-top" alt="Kemeja Hitam Buffalo" />
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

export default HasilPencarian