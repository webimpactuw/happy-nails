// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ClickPage from './pages/ClickPage';
import ServicePage from './pages/ServicePage';
import NavBar from './components/NavBar';
import FormPage from './pages/FormPage';

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
          <Route path="/pages" element={<FormPage />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
