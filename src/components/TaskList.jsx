import React, { Component } from 'react';
import { taskRef } from '../firebase';

class TaskList extends Component {
	componentDidMount() {
		taskRef.on('value', snap => {
			let tasks = [];
			snap.forEach(task => {
				const { email, title } = task.val();
				tasks.push({ email, title });
			})
			console.log('tasks', tasks);
		})
	}

	render() {
		return (
			<div>Task List </div>
		)
	}
}

export default TaskList;