import React from 'react';
import Cita from './Cita';
import PropTypes from "prop-types";
const ListaCitas=({citas,deleteCite})=>{
    const message= Object.keys(citas).length===0?"NO HAY CITAS":"ADMINISTRA LAS CITAS AQUI";
    return(
        <div className="card">
            <h1>{message}</h1>
            <div className="cita">
                {citas.map(cita => (
                    <Cita 
                        key={cita.id}
                        cita={cita}
                        deleteCite={deleteCite}
                    /> 
                ))}
            </div>
        </div>    
    )
}
ListaCitas.propTypes={
    citas:PropTypes.array.isRequired,
    deleteCite:PropTypes.func.isRequired
}
export default ListaCitas;
