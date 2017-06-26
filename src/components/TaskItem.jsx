import React, { Component } from 'react';

class TaskItem extends Component {
	render() {
		const { email, title } = this.props.task;
		return (
			<div style={{margin: '5px'}}>
				<strong>{title}</strong>
				_by {email}
			</div>
		)
	}
}

export default TaskItem;
