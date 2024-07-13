import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Mainpage from './Sections/Mainpage';
import Mens from './Mens/Mens';
import Womens from './Womens/Womens';
import Kids from './Kids/Kids';
import Cardetails from './Carddetails/Cardetails';
// import Stepper from './Stepper/Stepper';  // Corrected import statement
import './App.css';
import Steppers from './Steps/Steppers';
import StepThree from './Steps/StepThree';

function App() {
  const [search, setSearch] = useState('');

  return (
    <div>
      <Navbar search={search} setSearch={setSearch} />
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Mens" element={<Mens search={search} />} />
        <Route path="/Womens" element={<Womens search={search} />} />
        <Route path="/Kids" element={<Kids search={search} />} />
        <Route path="/cartdetails/:id" element={<Cardetails />} />
        <Route path="/checkout" element={<Steppers/>} />  
        <Route path="/success" element={<StepThree/>} />  

      </Routes>
    </div>
  );
}

export default App;
