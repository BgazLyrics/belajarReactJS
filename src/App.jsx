import { useState } from 'react'

import './App.css'

function Header() {
  return (
    <div className="title">
      <h1>Data Siswa</h1>
      <p>Card Sederhana</p>
    </div>
  );
}

function Greeting() {
  return (
    <>
      <h1>HAlloo</h1>
      <p>Selamat pagi</p>
    </>
  )
}

function Biodata(props) {
  return (
    <div className="card">
      <h2>{props.nama}</h2>
      {/* <p><strong>Nama:</strong> {props.nama}</p> */}
      <p><strong>Kelas:</strong> {props.kelas}</p>
      <p><strong>NISN:</strong> {props.nisn}</p>
    </div>
  )
}

function App() {
  const [showForm, setShowForm] = useState(false);

  console.log(showForm)

  const [input, setInput] = useState({
    nama: "",
    nisn: "",
    kelas: ""
  });
  const siswa = [
    { nama: "Bagas", nisn: "121212", kelas: "XI PPLG 1" },
    { nama: "Seviardana", nisn: "5656588", kelas: "XI PPLG 1" },
    { nama: "Rionaldi", nisn: "6365626", kelas: "XI PPLG 1" },
    { nama: "Nuansar", nisn: "123265", kelas: "XI PPLG 1" },
    { nama: "CusCus", nisn: "123265", kelas: "XI PPLG 1" },
    { nama: "Ahmad Dahlan", nisn: "123265", kelas: "XI PPLG 1" },
  ]

  console.log(input)
  return (
    <>
      <Header />
      {/* arsip belajar */}
      {/* <Biodata nama="Yoga" nisn="1234" kelas="XI PPLG 1"/>
      <Biodata nama="Yoga" nisn="1234" kelas="XI PPLG 1"/>
      <Biodata nama="Yoga" nisn="1234" kelas="XI PPLG 1"/>
      
      <Greeting /> */}
      <div className="div action-bar">
        <button className="btn-add" onClick={() => setShowForm(true)}>
          + Tambah Siswa
        </button>
      </div>

      <div className="card-container">
        {
          siswa.map((value) => {
            return (
              <Biodata
                nama={value.nama}
                nisn={value.nisn}
                kelas={value.kelas} />
            )

          })
        }
      </div>

      {showForm && (
        <div className="modal-overlay">
          <form>
            <h3>Form Tambah</h3>
            <h5>Nama:</h5>
            <input type="text" name='nama' placeholder='Nama' onChange={(x) => setInput({ ...input, nama: x.target.value })} />
            <h5>NISN:</h5>
            <input type="text" name='nisn' placeholder='NISN' onChange={(x) => setInput({ ...input, nisn: x.target.value })} />
            <h5>Kelas:</h5>
            <select name="kelas" id="kelas" onChange={(x) => setInput({ ...input, kelas: x.target.value })}>
              <option value="">--Pilih Kelas--</option>
              <option value="X PPLG 1">X PPLG 1</option>
              <option value="X PPLG 2">X PPLG 2</option>
              <option value="X PPLG 3">X PPLG 3</option>
              <option value="XI PPLG 1">XI PPLG 1</option>
              <option value="XI PPLG 2">XI PPLG 2</option>
              <option value="XII PPLG 1">XII PPLG 1</option>
              <option value="XII PPLG 1">XII PPLG 2</option>
            </select>
            <div className="modal-button">
              <button className="btn-add" type="button" onClick={() => setShowForm(false)}>
                Batal
              </button>
              <button className="btn-add" type="submit">
                Tambah
              </button>
            </div>
          </form>
        </div>

      )}

    </>

  )
}

export default App