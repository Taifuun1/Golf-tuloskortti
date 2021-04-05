import React from 'react';
import ReactDOM from 'react-dom';

import Router from './components/Router';


ReactDOM.render(
	<React.StrictMode>
		<Router />
	</React.StrictMode>,
	document.getElementById('root')
);


if (module.hot) {
	module.hot.accept('./index.js', function() {
		console.log('%cHot %creloaded!', "color: red;");
	})
}
