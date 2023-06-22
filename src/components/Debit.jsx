import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './styles.css';


function Debit (props) {
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
      <h1>Debits</h1>

      <h2> Your Current Balance </h2>
      <p>${props.balance}</p>


    <div id = "inDebit">

        <h4>Today's Date: {currentDate}</h4>

        <h3 >Transaction</h3>

        <form > Debit $ : <input type = "text" value={props.debitAmount}
            onChange={props.handleDebit} 
            placeholder="Enter Amount" /> 
    <p></p>
      Transaction Description : 
        <input type = "text"  value={props.debitDesc}
        onChange={props.handleDebitDesc} 
        placeholder="Enter Description" />
    </form>

    <p></p>

      <button onClick={props.handleGivenDebit}> Submit </button>

      </div>


      <h2>Transaction History</h2>
        {props.savedDebits.length > 0 ? (
        <ul>
          {props.savedDebits.map((debit, index) => (
            <li key={index}>
                <p>Transaction Date: {debit.currentDate}</p>
                <p>Debit Amount: $ {debit.transactionDebit}</p>
                <p>Description: {debit.debitDesc}</p>
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
};

export default Debit;



