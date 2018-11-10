import React from "react";
const Card = () => {
  return (
    <div className="creditCard">
      <h1>CREDIT CARD</h1>
      <img className="puce" src="images/puce.jpg" />
      
      <p className="numbers"> 7253 3265 7835 1245 </p>
      <p className="monthYear">MONTH/YEAR</p>

      <div className="bb">
       
          <div className="number"> 5422</div>

          <div className="align">
          <span className="validthru"> VALID <span>THRU </span> </span> 
          
          <svg aria-hidden="true" data-prefix="fas" data-icon="caret-right" class="svg-inline--fa fa-caret-right fa-w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"><path fill="currentColor" d="M0 384.662V127.338c0-17.818 21.543-26.741 34.142-14.142l128.662 128.662c7.81 7.81 7.81 20.474 0 28.284L34.142 398.804C21.543 411.404 0 402.48 0 384.662z"></path></svg>

          <span className="after-arrow">11/50</span>
          </div>
          <img className="masterCard" src="images/master-card.jpg" />

        </div> 
        
          <h3>CARDHOLDER </h3>
        
      
     
    </div>
  );
};

export default Card;
