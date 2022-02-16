import {
	BrowserRouter as Router,
	Routes,
	Route,
	Link
} from 'react-router-dom';
import Greeting from './Greeting';
import { getGreeting } from './redux/greeting/greeting';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

function App() {

  const greeting = useSelector((state) => state.greetingReducer);
  const dispatch = useDispatch();

  const greetingText = () => {
    axios.get('http://localhost:3000/api/v1/greetings')
      .then((response) => {
        const greeting = response.data
        dispatch(getGreeting(greeting.text));
      });
  };

  return (
    <div className="App">
      <Router>
        <div className="App">
          <div className="App-header">
            <Link to="/greeting" onClick={greetingText}>Click this link to get a random greeting</Link>
          </div>
          <Routes>
                <Route exact path='/greeting' element={< Greeting greeting={greeting}/>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
