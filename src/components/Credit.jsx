import React, {useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";

function Credit(props) { 
    const [currentDate, setCurrentDate] = useState(""); 

    useEffect(() => {
        handleCurrentDate();
      }, []);
    
      function handleCurrentDate() {
        let today = new Date().toLocaleDateString();
        setCurrentDate(today);
        console.log(today);
      }


return (
    <div>
        <h1>Credits </h1>


        <h2>Your Current Balance </h2>
        <p>${props.balance} </p>

        <h3> Today's Date: {currentDate} </h3>

         <h4>Transaction</h4>

         <form id="form"> Credit $ : <input type = "text"  
            value={props.creditAmount}
            onChange={props.handleCredit} 
            placeholder="Enter Amount" /> 
        <p></p>
      Description of Transaction: <input type = "text"  
        value={props.creditDesc}
        onChange={props.handleCreditDesc} 
        placeholder="Enter Description" />
    </form>
    <p> </p>


        <button onClick= {props.handleGivenCredit} id="searchC" > Submit </button>

        <h2>Transaction History</h2>
        {props.savedCredits.length > 0 ? (
        <ul>
          {props.savedCredits.map((credit, index) => (
            <li key={index}>
                <p>Transaction Date: {credit.currentDate}</p>
                <p>Credit Amount: $ {credit.transactionCredit}</p>
                <p>Description: {credit.creditDesc}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p></p>
      )}
        <nav>
            <ul>
                <li>
                    <Link to="/userProfile">Back to User Profile</Link>
                </li>
                <li>
                    <Link to="/">Back to Home</Link>
                </li>
            </ul>
        </nav>
    </div>

    );
}

export default Credit;