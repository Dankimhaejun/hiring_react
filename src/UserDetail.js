import React from 'react';
import fakeData from './getUserData';

function UserDetail({ match, history, props }) {
	const user = fakeData.filter((user) => {
		return String(user.id) === match.params.id;
    });
   
    console.log(history)
	return (
		<div>
			<h2>User Detail</h2>
            <img src="https://randomuser.me/api/portraits/women/11.jpg" alt=""/>
			<div>이름 : {user[0].name}</div>
			<div>이메일 : {user[0].email} </div>
            <div>모바일 : {user[0].phone}</div>
			<button onClick={() => history.goBack()}>Back</button>
		</div>
	);
}

export default UserDetail;
