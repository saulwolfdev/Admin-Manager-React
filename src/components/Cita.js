import React from 'react'
 import PropTypes from "prop-types";
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
            onClick={()=>deleteCite(cita.id)}
            >delete</button>
        </div>
    )
Cita.propTypes={
    cita:PropTypes.object.isRequired,
    deleteCite:PropTypes.func.isRequired
}
export default Cita;