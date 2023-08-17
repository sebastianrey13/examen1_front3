import React, { useState } from 'react'

function Formulario(props) {

    const [nombre, setNombre] = useState("")
    const [color, setColor] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()

        if ([nombre, color].includes("")) {
            alert("Por favor compelta los campos y elimina los espacios en blanco")
            props.onFormSubmit({validacion:false});
        }
        else if (nombre.length < 3) {
            alert("Nombre debe tener mas de 3 caracteres")
            props.onFormSubmit({validacion:false});

        }
        else if (color.length < 6) {
            alert("El color debe ser de mas de 6 caracteres")
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
            </div>
        </>
    )
}

export default Formulario