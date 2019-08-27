import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import Users from './Users';

export default class App extends Component {

	render() {
		return (
			<h1>
				<Router>
					<div>
						<Switch>
							<Route exact path="/" component={Home} />
							<Route path="/users" component={Users} />
						</Switch>
					</div>
				</Router>
			</h1>
		);
	}
}

// export default function App() {
//   console.log(fakeData);
//   const renderUser = fakeData.map((value,i) => {
//     return <Route path={'/users/' + value.id} key={i} component={UserInfo} />
//   })
// 	return (
// 		<Router>
// 			<div>
// 				<Switch>
// 					<Route exact path="/" component={Home} />
// 					<Route path="/users" component={Userlist} data={fakeData} />
//           <Route path=":id" component={UserInfo} />
// 					{renderUser}
// 				</Switch>
// 			</div>
// 		</Router>
// 	);
// }
