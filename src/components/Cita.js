import React from 'react'
 
const Cita = ({cita,deleteCite}) => 
    (
        <div>
            <h1>Cita</h1>
            <p>{cita.mascota}</p>
            <p>{cita.dueno}</p>
            <p>{cita.dia}</p>
            <p>{cita.hora}</p>
            <p>{cita.sintomas}</p>
            <button
            onClick={deleteCite}
            >delete</button>
        </div>
    )

export default Cita;