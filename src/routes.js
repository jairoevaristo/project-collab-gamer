import {
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
        <Route path='/signup' component={SignUp} exact />
        <Route path='/login' component={Login} exact />
        <Route path='/recover-password' component={ForgotPassword} exact />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;