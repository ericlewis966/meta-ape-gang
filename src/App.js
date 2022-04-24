import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Web3ReactProvider } from '@web3-react/core';
import getLibrary from 'configs/getLibrary';
import Views from './views';
import './App.css';

function App() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Router>
        <Switch>
          <Route path="/">
            <Views />
          </Route>
        </Switch>
      </Router>
    </Web3ReactProvider>
  );
}

export default App;
