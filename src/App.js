import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About/About';
import Apointment from './pages/Appointment/Apointment';
import Home from './pages/Home/Home';
import Login from './pages/Log_in/Log_in';
import Navbar from './shared/navbar';

function App() {
  return (
    <div className='max-w-7xl mx-auto px-12' >
      <Navbar></Navbar>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/appointment" element={<Apointment />} />
        <Route path="/about" element={<About />} />
        <Route path="/log_in" element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
