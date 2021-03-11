import { Switch } from 'react-router-dom';
import Route from './Route';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Feed from '../pages/Feed';
import Profile from '../pages/Profile';
import Edit from '../pages/EditProfile';
import Create from '../pages/CreatePhoto';
import Post from '../pages/Post';
import NotFound from '../pages/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Login} />
      <Route path="/account/signup" component={Signup} />
      <Route path="/account/edit" component={Edit} isPrivate />
      <Route path="/account/create" component={Create} isPrivate />
      <Route path="/feed" component={Feed} isPrivate />
      <Route path="/p/:id" component={Post} isPrivate />
      <Route path="/:username" component={Profile} isPrivate />
      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
