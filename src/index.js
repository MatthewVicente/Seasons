import React from "react";
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			lat: null,
			long: null,
			errorMessage: ''
		};

		window.navigator.geolocation.getCurrentPosition(
			(positions) => {
				this.setState({ lat: positions.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	render() {
		if (this.state.errorMessage && !this.state.lat) {
			return <h3>Error: {this.state.errorMessage}</h3>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return (
				<div>
					<h3>Latitude: {this.state.lat}</h3>		
				</div>
			);
		}

		return <h1>Loading...</h1>
	}
}

ReactDOM.render(
	<App/>, 
	document.querySelector('#root')
);