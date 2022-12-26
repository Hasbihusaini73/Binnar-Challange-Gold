import "./index.css"

function CariMobil() {
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
                  <a className="nav-link me-3" href="#service">OUR SERVICE</a>
                  <a className="nav-link me-3" href="#whyUs">WHY US</a>
                  <a className="nav-link me-3" href="#testimoni">TESTIMONIAL</a>
                  <a className="nav-link me-3" href="#faq">FAQ</a>
                </div>
              </div>
            </div>
          </nav>
    </header>

    <section className="home mb-5" id="home">
        <div className="container h-100">
            <div className="row h-100 fw-bold">
                <div className="kotak col-lg-6">
                    <h1 className="heading">Sewa & Rental Mobil Terbaik di kawasan (JAKARTA)</h1>
                    <p className="subHeading mt-3">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
                    <div className="btn-home mt-5">
                        <button><a href="#" className="sewa">Mulai Sewa Mobil</a></button>
                    </div>
                </div>
                <div className="col-lg-6 position-relative">
                  <div className="banner-image">
                   <img src={require("./Mobil.png")}  className="img-fluid position-absolute mt-5" alt="mobil"/>
                  </div>
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
                            <input type="name" className=" form form-control" id="floatingInput" placeholder="Honda Civic" />
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

export default CariMobil;