import { Switch, Route } from 'react-router-dom';
import { useFirebase } from '../context/useFirebase';

import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Feed from '../pages/Feed';
import NotFound from '../pages/NotFound';

function Routes() {
  const { user } = useFirebase();

  return (
    <Switch>
      <Route path="/" exact component={user ? Feed : Login} />
      <Route path="/account/signup" component={Signup} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;
