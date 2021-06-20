import { BrowserRouter as Router, NavLink, Redirect, Route, Switch } from "react-router-dom";
import HomePage from './layouts/homepage';
import About from './layouts/about';

// layouts
import Front from './layouts/front';
import Back from './layouts/back';

const AppRoute = ({component: Component, layout: Layout, ...rest}) => (
  <Route {...rest} render={props => (
    <Layout><Component {...props}></Component></Layout>
  )}></Route>
)
function App() {
  return (
    <Router>
      <AppRoute path='/' exact layout={Front} component={HomePage}></AppRoute>
      <AppRoute path='/about' layout={Back} component={About}></AppRoute>
    </Router>
  );
}

export default App;
