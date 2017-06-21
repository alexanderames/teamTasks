import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

ReactDOM.render(
	<Router path="/" history={browserHistory}>
		<Router path="/app" component={App} />
		<Router path="/signin" component={SignIn} />
		<Router path="/signup" component={SignUp} />
	</Router>, document.getElementById('root')
)