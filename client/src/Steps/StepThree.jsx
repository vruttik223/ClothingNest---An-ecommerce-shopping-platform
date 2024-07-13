import React from 'react';
import { Link } from 'react-router-dom';
 import "./step3.css"
const StepThree = () => {
 

 
  return (
    <div  className="step-three-container">
      <h2>Payment Successful!</h2>
      <p>Thank you for your purchase. Your payment has been processed successfully.</p>
      <Link to="/"> 
      <button className="home-buttonroute" >Go to Home</button>
      </Link>
    </div>
  );
}

export default StepThree;
