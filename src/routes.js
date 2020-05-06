import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';
import SignIn from './Components/signin/index';

import Home from './Components/home';

const Routes = (props) => {
  return(
    <Layout>
        <Switch>
            <Route exact component={Home} path="/"/>
            <Route exact component={SignIn} path ="/SignIn"/>
        </Switch>
    </Layout>
  )
}

export default Routes;