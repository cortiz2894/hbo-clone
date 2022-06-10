
import './App.css';
import Login from './components/Login/Login'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    //JSX 
    <div className="App">
      <div className='container-general'>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/login" element={<Login />}/>   
            <Route exact path="/" element={<h3>HOME</h3>}/>
          </Routes>
          {/* <Login /> */}
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
