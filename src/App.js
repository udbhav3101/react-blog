import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Create from './Components/Create/Create';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import BlogDetails from './Components/BlogDetails/BlogDetails';
import NotFoundPage from './Components/NotFoundPage/NotFoundPage';
import './index.css';


function App() {


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
          <Route exact path='/notfound' element={<><NotFoundPage/></>}/>
        </Routes>
        </div>

      </div>
    </Router>
    </>
  );
}

export default App;