import "./index.css"

export default function Footer() {
    return (
        <>
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
                        <div className="kolom kolom-logo col-lg-3">
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