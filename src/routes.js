import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';
import SignIn from './Components/signin/index';
import Dashboard from './Components/admin/Dashboard';

import Home from './Components/home';

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={SignIn} path ="/SignIn"/>
            <Route exact component={Dashboard} path ="/dashboard"/>
        </Switch>
    </Layout>
  )
}

export default Routes;