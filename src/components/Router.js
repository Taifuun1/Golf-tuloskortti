import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
	// Link,
	// useRouteMatch,
	// useParams,
	Redirect
} from "react-router-dom";

import Frontpage from './Frontpage';
import Scorecard from './Scorecard';
import NotFound from './NotFound';
import '../scss/styles.sass';


const Router = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<Frontpage />
				</Route>
				<Route path="/scorecard">
					<Scorecard />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
		</BrowserRouter>
	);
}

export default Router;
