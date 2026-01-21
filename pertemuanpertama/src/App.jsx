import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

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
      <p><strong>Nama:</strong> {props.nama}</p>
      <p><strong>Kelas:</strong> {props.kelas}</p>
      <p><strong>NISN:</strong> {props.nisn}</p>
    </div>
  )
}

function App() {
  return (
    <>
      <Greeting />
      <div className="card-container">
        <Biodata nama="Bagas" kelas="XI PPLG 1" nisn="2126202525" />
        <Biodata nama="Cuscus" kelas="XI PPLG 1" nisn="856696552" />
      </div>
    </>
  )
}

export default App