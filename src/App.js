import './App.scss';
import { TeamPage } from './pages/TeamPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MatchPage } from './pages/MatchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/teams/:teamName/matches/:year" component={MatchPage} />
          <Route path="/teams/:teamName" component={TeamPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
