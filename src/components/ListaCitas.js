import React from 'react';
import Cita from './Cita';

const ListaCitas=({citas})=>{
    return(
        <div className="card">
            <h1>Lista Citas</h1>
            <div className="cita">
                {citas.map(cita => (
                    <Cita 
                        key={cita.id}
                        cita={cita}
                    /> 
                ))}
            </div>
        </div>    
    )
}
export default ListaCitas;
