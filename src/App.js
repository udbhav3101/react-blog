import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';

function App() {

  const title = "Welcome to my Blog";

  return (
    <>
    <Router>
      <div className="App">
        <Navbar/>
        <div className="content">
        <Routes>
          <Route exact path='/' element={<><Home/></>}/>
        </Routes>
        </div>
      </div>
    </Router>
    </>
  );
}

export default App;
