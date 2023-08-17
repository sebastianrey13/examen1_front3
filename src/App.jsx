import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import Card from './components/Card'

function App() {

  const [form, setForm] = useState({
    nombre: "",
    color: "",
    validacion: false
  });

  const handleFormSubmit = (datos) => {
    setForm(datos);
  }

  const validarForm = form.validacion

  return (
    <>
      <Formulario
        onFormSubmit={handleFormSubmit}
      />
      {validarForm && <Card
        nombre={form.nombre}
        color={form.color}
      />}
    </>
  )
}

export default App
