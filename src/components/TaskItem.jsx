import React, { Component } from 'react';
import { connect } from 'react-redux';
import { completeTaskRef } from '../firebase';

class TaskItem extends Component {
	completeTask() {
		//add to complete task on the database
		//remove task from the task reference
		const { email } = this.props.user;
		const { title } = this.props.task;
		console.log('email', email, 'title', title);
		completeTaskRef.push({email, title});
	}

	render() {
		const { email, title } = this.props.task;
		return (
			<div style={{margin: '5px'}}>
				<strong>{title}</strong>
				<span style={{marginRight: '5px'}}>_by {email}</span>
				<a
					type="button"
					className="btn-floating green"
					onClick={() => this.completeTask()}
				>
					<i className="material-icons">done</i>
				</a>
			</div>
		)
	}
}

function mapStateToProps(state) {
	const { user } = state;
	return {
		user
	}
}

export default connect()(TaskItem);
