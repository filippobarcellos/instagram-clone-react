import { Route as RouteDOM, Redirect } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

function Route({ isPrivate = false, component: Component, ...rest }) {
  const { user } = useAuth();

  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/feed',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
}

export default Route;
