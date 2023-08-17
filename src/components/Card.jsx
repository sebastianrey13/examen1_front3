import React from 'react';

function Card (props) {
    return (
        <div>
            <h3>¡Hola {props.nombre}!</h3>
            <p>Sabemos que tu color favorito es:</p>
            <p>{props.color}</p>
        </div>
    )
}

export default Card;