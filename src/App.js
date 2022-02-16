import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="App">
          <ul className="App-header">
            <li>
              <Link to="/greeting">Greeting</Link>
            </li>
          </ul>
          <Routes>
                <Route exact path='/greeting' element={< Greeting />}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
