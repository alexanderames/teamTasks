import React, { Component } from 'react';
import { connect } from 'react-redux';
import { taskRef } from '../firebase';

class AddTask extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: ''
		}
	}

	addTask() {
		console.log('this', this);
		const { title } = this.state;
		const { email } = this.props.user;
		taskRef.push({email, title});
	}

	render() {
		return (
			<div className="row">
				<div className="col s6">
					<input
						type="text"
						placeholder="Add a task:"
						className="validate"
						onChange={event => this.setState({title: event.target.value})}
					/>
				</div>
				<div className="col s6">
					<a
						className="btn-floating btn-large waves-effect waves-light red"
						type="button"
						onClick={() => this.addTask()}
					>
					<i className="material-icons">add</i>
					</a>
				</div>
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

export default connect(mapStateToProps, null)(AddTask);