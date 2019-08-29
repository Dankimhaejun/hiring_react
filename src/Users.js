import React from 'react'
import { Route } from 'react-router-dom';
import Userlist from './Userlist';
import UserDetail from './UserDetail';


export default function Users({match}) {
    return (
        <div>
            <Route path={`${match.path}/:id`} component={UserDetail} />
			<Route exact path={match.path} component={Userlist} />
        </div>
    )
}


// export default class Users extends Component {
// 	constructor(props) {
// 		super(props);

// 		this.state = {
// 			data: [],
// 			server: 'http://localhost:5000/users'
// 		};
// 	}
// 	 componentDidMount() {
// 		fetch(this.state.server)
// 			.then((res) => res.json())
// 			.then((res) =>
// 				this.setState({
// 					data: res
// 				})
// 			)
// 			.catch((err) => console.error(err));
// 	}

// 	render() {
// 		return (
// 			<div>
//                 <Userlist path={this.props.match.path} users ={this.state.data} />
// 				<Route path={`${this.props.match.path}/:id`} component={UserDetail} />
// 				{/* <Route exact path={this.props.match.path} users={this.state.data} component={Userlist} /> */}
// 			</div>
// 		);
// 	}
// }

// export default function Users({match}) {
//     console.log('난매치',match)
//     return (
//         <div>
//             <Route exact path={match.path} component={Userlist} />
//             <Route path={`${match.path}/:id`} component={UserDetail} />

//         </div>
//     )
// }
