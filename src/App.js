import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './index.css';
import BlogDetails from './Components/BlogDetails/BlogDetails';

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
          <Route exact path='/create' element={<><Create/></>}/>
          <Route exact path='/blogs/:id' element={<><BlogDetails/></>}/>
        </Routes>
        </div>

      </div>
    </Router>
    </>
  );
}

export default App;
