import React from 'react'
 
const Cita = ({cita}) => 
    (
        <div>
            <h1>Cita</h1>
            <p>{cita.mascota}</p>
            <p>{cita.dueno}</p>
            <p>{cita.dia}</p>
            <p>{cita.hora}</p>
            <p>{cita.sintomas}</p>
        </div>
    )

export default Cita;