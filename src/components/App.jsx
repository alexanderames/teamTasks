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
			<div style={{margin: '5px'}}>
				<h3>Task List</h3>
				<AddTask />
				<hr />
				<h4>Tasks</h4>
				<TaskList />
				<hr />
				<a
					className="btn-floating btn-large yellow darken-1"
					onClick={() => this.signOut()}
				>
					<i className="material-icons">call_missed_outgoing</i>
				</a>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {}
}

export default connect(mapStateToProps, null)(App);