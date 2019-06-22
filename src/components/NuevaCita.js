import React, { Component } from 'react';
class NuevaCita extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            cita:{
                mascota:"",
                dueno:"",
                dia:"",
                hora:"",
                sintomas:"",
            },
            error:false
        };
    }
    handleChange=e=>{
        e.preventDefault()
        this.setState({
            cita:{
            ...this.state.cita,
            [e.target.name]:e.target.value
        }
        })
    }
    handleSubmit=e=>{
        e.preventDefault()
        const {mascota,dueno,dia,hora,sintomas}=this.state.cita;
        if(mascota==""||dueno==""||dia==""||hora==""||sintomas==""){
            this.setState({
                error:true
            })
            return
        }
        this.props.createNewCite(this.state.cita)
    }
    render() {
        return (
            <div className="container">
                <form  onSubmit={this.handleSubmit}>
                    <input 
                    onChange={this.handleChange}
                    value={this.state.cita.mascota}
                    type="text" 
                    name="mascota" 
                    placeholder="nombre de la mascota"/>
                    <input 
                    onChange={this.handleChange}
                     value={this.state.cita.dueno}
                    type="text" 
                    name="dueno" 
                    placeholder="nombre del dueño"/>
                    <input 
                    onChange={this.handleChange}
                     value={this.state.cita.dia}
                    type="date" 
                    name="dia" 
                    placeholder="ingrese fecha"/>
                    <input 
                    onChange={this.handleChange}
                     value={this.state.cita.hora}
                    type="time"
                     name="hora" 
                     placeholder="ingrese hora"/>
                    <textarea
                     onChange={this.handleChange}
                     value={this.state.cita.sintomas}
                    name="sintomas" 
                    cols="30" 
                    rows="10" 
                    placeholder="ingrese hora"></textarea>
                    <input 
                    type="submit" 
                    value="buscar"/>
                </form>
            </div>
        );
    }
}

export default NuevaCita;