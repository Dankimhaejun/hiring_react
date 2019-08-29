import React, { Component } from 'react'
import { Link } from "react-router-dom";


export default class Userlist extends Component {
  constructor(props) {
		super(props);

		this.state = {
			data: [],
			server: 'http://localhost:5000/users'
		};
	}
	 componentDidMount() {
		fetch(this.state.server)
			.then((res) => res.json())
			.then((res) =>
				this.setState({
					data: res
				})
			)
      .catch((err) => console.error(err));
   }
  render() {
    console.log(this.props.match.path)
    return (
      <div>USER LIST
        <ol>
        {this.state.data.map((value, i) => {
          return <li key ={i}>
           <Link to={`${this.props.match.path}/${value.id}`}>{value.name}</Link>
          </li>
        })}
        </ol>
      </div>
    )
  }
}



// function UserList(props) {
//   console.log(props.users)
//   console.log('이것은 내가원하는 프롭스',props.path)
//   const users = props.users;
//   return (
//     <div>
//       <h2>UserList</h2>
//       <ol >
//         {users.map((value, i) => {
//           return <li key ={i}>
//            <Link to={`${props.path}/${value.id}`}>{value.name}</Link>
//           </li>
//         })}
//         {/* {users.map((value, index) => (
//           <li key={index}>
//             <Link to={`${users.match.url}/${users.id}`}>{value.name}</Link>
//           </li>
//         ))} */}
//       </ol>
//     </div>
//   );
// }

// export default UserList;