import './App.css';
import Contact from './pages/contact/Contact.js';
import Homepage from './pages/home/Homepage.js'
import Activities from './pages/activities/Activities.js'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Guidelines from './pages/guidelines/Guidelines.js';
import Volunteer from './pages/volunteer/Volunteer.js';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Homepage/>} exact />
      <Route path="/contact" element={<Contact/>} exact />
      <Route path="/activities" element={<Activities/>} exact />
      <Route path="/guidelines" element={<Guidelines/>} exact />
      <Route path="/volunteer-form" element={<Volunteer/>} exact />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
