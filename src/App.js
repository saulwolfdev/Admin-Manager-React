import React, { Component } from 'react';
import Header from './components/Header';
import NuevaCita from './components/NuevaCita';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {  };
	}
	createNewCite=data=>{
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
			</div>
		);
	}
}

export default App;
