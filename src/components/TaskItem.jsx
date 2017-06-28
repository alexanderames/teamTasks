import React, { Component } from 'react';

class TaskItem extends Component {
	render() {
		const { email, title } = this.props.task;
		return (
			<div style={{margin: '5px'}}>
				<strong>{title}</strong>
				<span style={{marginRight: '5px'}}>_by {email}</span>
				<a
					type="button"
					className="btn-floating green"
					onClick={() => this.completeGoal()}
				>
					<i className="material-icons">done</i>
				</a>
			</div>
		)
	}
}

export default TaskItem;
