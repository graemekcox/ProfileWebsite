import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import HomePage from './components/HomePage/HomePage';
import PIU from './components/ProjectPage/PIU';
import HVSideBoard from './components/ProjectPage/HVSideBoard';
import SmallerBoards from './components/ProjectPage/SmallBoards';
import ACB from './components/ProjectPage/ACB';
                
function App() {
  return (
      <Router>
        <div className="app">
          <Route exact path="/"component={HomePage}/>
          <Route path="/piu" component={PIU} />
          <Route path="/acb" component={ACB} />
          <Route path="/hvsideboard" component={HVSideBoard} />
          <Route path="/smallboards" component={SmallerBoards}/>
        </div>
      </Router>
  );
}

export default App;
