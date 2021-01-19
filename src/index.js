import React from "react";
import ReactDOM from 'react-dom';
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
	state = {
		lat: null,
		long: null,
		errorMessage: ''
	};

	componentDidMount() {
		window.navigator.geolocation.getCurrentPosition(
			(positions) => {
				this.setState({ lat: positions.coords.latitude });
			},
			(err) => {
				this.setState({ errorMessage: err.message });
			}
		);
	}

	renderContent() {
		if (this.state.errorMessage && !this.state.lat) {
			return <h3>Error: {this.state.errorMessage}</h3>;
		}

		if (!this.state.errorMessage && this.state.lat) {
			return <SeasonDisplay lat={this.state.lat} />;
		}

		return <Spinner message="Please accept location request" />
	}

	render() {
		return <div className="border red">
			{this.renderContent()}
		</div>
	}
}

ReactDOM.render(
	<App/>, 
	document.querySelector('#root')
);