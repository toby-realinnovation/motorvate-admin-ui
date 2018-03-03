import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  RouteComponentProps
} from 'react-router-dom';
import { SignUpContainer } from '../signup';
import { SignInContainer } from '../auth';

export const UnauthorizedLayout = (props: RouteComponentProps<{}>) => {
  return (
    <div>
      <Switch>
        {/* <Route
          path={`${props.match.path}/login`}
          render={renderProps => <Login {...renderProps} />}
        />
        <Route
          path={`${props.match.path}/signup`}
          render={renderProps => <Signup {...renderProps} />}
        /> */}
      </Switch>
    </div>
  );
};

export const mainRoutes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/signup" component={SignUpContainer} />
        <Route path="/auth" component={SignInContainer} />
      </Switch>
    </Router>
  );
};
