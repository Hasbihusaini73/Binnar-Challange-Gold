import "./index.css"


export default function Pencarian() {
    return (
        <div id="pencarian">
            <section className="pencarian">
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
        </div>
    )
}