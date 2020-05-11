import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoutes = ({
    user,
    component: Comp,    // dashboard name change to Comp
    ...rest
}) => {
    return <Route {...rest} component={(props)=>(
        user ?
            <Comp {...props} user={user}/>
            :
        <Redirect to="/sign_in"/>  // if user !auth, the user is redirected to Sign_in
    )}/>
};

export default PrivateRoutes;