// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ClickPage from './pages/ClickPage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';

/*
 TODO:  
    - Contact Page
    - Services Page
    - Booking Page
    - About Page
*/

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/services" element={<ServicePage />}/>
          <Route path="/test" element={<TestPage />}/>
          <Route path="/test/click" element={<ClickPage />}/>
          <Route path="/contact" element={<ContactPage />}/>
        </Routes>
    </BrowserRouter>
  );
}

export default App;
