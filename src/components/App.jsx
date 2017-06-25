import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../firebase';
import AddTask from './AddTask';
import TaskList from './TaskList';

class App extends Component {
	signOut() {
		firebaseApp.auth().signOut();
	}

	render() {
		return(
			<div>
				<div>
					<h3>Tasks</h3>
					<AddTask />
					<TaskList />
				</div>
				<button
					className="red"
					onClick={() => this.signOut()}
				>
					Sign Out
				</button>
			</div>
		)
	}
}

function mapStateToProps(state) {
	console.log('state', state);
	return {}
}

export default connect(mapStateToProps, null)(App);