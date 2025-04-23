// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import TestPage from './pages/TestPage';
import ClickPage from './pages/ClickPage';

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
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/test" element={<TestPage />}/>
        <Route path="/test/click" element={<ClickPage />}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
