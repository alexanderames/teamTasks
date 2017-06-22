import React, { Component } from 'react';
import { Link } from 'react-router';
import { firebaseApp } from '../firebase';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			error: {
				message: ''
			}
		}
	}

	signUp() {
		console.log(this.state);
		const { email, password } = this.state; 
		firebaseApp.auth().createUserWithEmailAndPassword(email, password)
			.catch(error => {
				this.setState({error});
			})
	}

	render() {
		return(
			<div className="row">
	    	<form className="col s12">
					<h2>SignUp</h2>
					<div className="row">
						<div className="input-field col s6">
							<input
								placeholder="email"
								className="validate"
								type="email"
								onChange={event => this.setState({email: event.target.value})}
							/>
						</div>
					</div>
					<div className="row">
						<div className="input-field col s6">
							<input
								placeholder="password"
								type="password"
								className="validate"
								onChange={event => this.setState({password: event.target.value})}
							/>
						</div>
					</div>
					<div className="row">
						<div className="input-field inline">
							<button
								className="waves-effect waves-light btn"
								type="button"
								onClick={() => this.signUp()}
							>
								Sign Up
							</button>
							{this.state.error.message}
							<Link to={'/signin'}>Already a user? Sign In!</Link>
						</div>
					</div>
				</form>
			</div>
		)
	}
}

export default SignUp;