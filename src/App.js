// import './App.css';
import Resume from './components/Resume/Resume';
import Todo from './components/Todo/Todo';

import CovidTracker from './components/CovidTracker/CovidTracker'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route path="/todo">
              <Todo />
          </Route>
          <Route path="/covid_tracker">
              <CovidTracker />
          </Route>

          <Route exact path="/">
              <Resume />
          </Route>
      </Switch>
    </Router>

    </div>
  );
}

export default App;
