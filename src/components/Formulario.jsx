import React, { useState } from 'react'
import Error from './Error'

function Formulario(props) {

    const [nombre, setNombre] = useState("")
    const [color, setColor] = useState("")
    const [error, setError] = useState("")



    const handleSubmit = (e) => {
        setError("")
        e.preventDefault()
        if ([nombre, color].includes("")) {
            setError("Por favor compelta los campos y elimina los espacios en blanco")
            props.onFormSubmit({validacion:false});
        }
        else if (nombre.length < 3) {
            setError("Nombre debe tener mas de 3 caracteres")
            props.onFormSubmit({validacion:false});

        }
        else if (color.length < 6) {
            setError("El color debe ser de mas de 6 caracteres")
            props.onFormSubmit({validacion:false});
        }
        else {
            props.onFormSubmit({nombre, color, validacion:true});
        }
    }

    return (
        <>
        <div
        className="container"
        >
            <h1>Elige un color</h1>
            <form
                onSubmit={handleSubmit}
            >
                <div>
                    <input
                        type="text"
                        placeholder="Ingresa tu nombre"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div>
                    <input
                        type="text"
                        placeholder="Ingresa tu color favorito"
                        value={color}
                        onChange={e => setColor(e.target.value)}
                    />
                </div>

                <input
                    className="button"
                    type='submit'
                    value="Enviar"
                />

            </form>

            <Error
            info= {error}
            />          

            </div>
        </>
    )
}

export default Formulario