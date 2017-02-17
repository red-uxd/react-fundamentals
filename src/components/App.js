import React from 'react';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			name: ''
		};
	}

	render() {

		return (
			<div>
				<buttton onClick={() => {this.setState({name: 'Velopert'});}}>Click Me</buttton>
				<h1>Hello React Skeleton! {this.state.name}</h1>
			</div>
		);
	}
}

export default App;