import React, { Component } from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {
		state={
			citas:[]
		}
	createNewCite=data=>{
		const citas=[...this.state.citas,data]
		this.setState({
			citas
		})
		console.log(data)
	}
	render() {
		return (
			<div className="container">
				<Header title="Administrador de pacientes"/>
							<div className="container">
				<NuevaCita
				createNewCite={this.createNewCite}/>
			</div>
			<div className="container">
				<ListaCitas/>
			</div>
			</div>
		);
	}
}

export default App;
