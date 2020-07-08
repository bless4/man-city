import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route } from 'react-router-dom';
import PrivateRoutes from './Components/authRoutes/PrivateRoutes';
import PublicRoutes from './Components/authRoutes/PublicRoutes';
import SignIn from './Components/signin/index';
import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AddEditMatch from './Components/admin/matches/addEditMatch';
import AdminPlayers from './Components/admin/players';
import AddEditPlayers from './Components/admin/players/addEditPlayers';

import Home from './Components/home';

const Routes = (props) => {
  return (
    <Layout>
      <Switch>
        <PublicRoutes {...props} restricted={true} exact component={SignIn} path='/signin' />
        <PublicRoutes {...props} restricted={false} exact component={Home} path='/' />


        <PrivateRoutes {...props} path="/admin_players/add_players" exact component={AddEditPlayers} />
        <PrivateRoutes {...props} path="/admin_players/add_players/:id" exact component={AddEditPlayers} />
        <PrivateRoutes {...props} path="/admin_players" exact component={AdminPlayers} />
        <PrivateRoutes {...props} path="/admin_matches/edit_match" exact component={AddEditMatch} />
        <PrivateRoutes {...props} path="/admin_matches/edit_match/:id" exact component={AddEditMatch} />
        <PrivateRoutes exact component={Dashboard} path='/dashboard' {...props} />
        <PrivateRoutes exact component={AdminMatches} path='/admin_matches' {...props} />

      </Switch>
    </Layout>
  )
}

export default Routes;