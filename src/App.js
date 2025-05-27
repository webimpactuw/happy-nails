import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import ServicePage from './pages/ServicePage';
import ContactPage from './pages/ContactPage';
import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import FormPage from './pages/FormPage';
import Foot from './components/Foot';

function App() {
  return (
    <BrowserRouter basename="/happy-nails">
      <NavBar/>
      <div style={{ marginTop: '4em' }}>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/services" element={<ServicePage />}/>
            <Route path="/booking" element={<FormPage />}/>
            <Route path="/contacts" element={<ContactPage />}/>
            <Route path="/contact" element={<ContactPage />}/>
          </Routes>
        </div>
        <Foot></Foot>
    </BrowserRouter>
  );
}

export default App;
