import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';
import PrivateRoute from './Components/authRoutes/PrivateRoutes';
import SignIn from './Components/signin/index';
import Dashboard from './Components/admin/Dashboard';

import Home from './Components/home';

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={SignIn} path ="/SignIn"/>
            
            <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
        </Switch>
    </Layout>
  )
}

export default Routes;