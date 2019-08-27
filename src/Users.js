import React from 'react'
import {Route} from "react-router-dom"
import Userlist from './Userlist';
import UserDetail from './UserDetail';

export default function Users({match}) {
    return (
        <div>
            <Route exact path={match.path} component={Userlist} />
            <Route path={`${match.path}/:id`} component={UserDetail} />

        </div>
    )
}
