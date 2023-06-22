import { Link, Route, Routes, Router } from "react-router-dom";
import React from "react";
import Debit from "./Debit";
import Credit from "./Credit";


const TransactionPage = (props) => {
  return (
    <div>
      <h2 id= "tType">Please Choose a Transcation Type: </h2>

    <nav>
        <ul>
          <li id = "chooseDeb">
            <Link to="./Debit">Debit</Link>
          </li>
          <li id= "chooseCred">
            <Link to="./Credit">Credit</Link>
          </li>
        </ul>
      </nav>
    
        <Routes> {/** must pass all the parent props */}
          <Route path="/Debit" element={<Debit 
            actualDebit = {props.actualDebit} balance = {props.balance} 
            handleDebit = {props.handleDebit} handleGivenDebit = {props.handleGivenDebit}
            handleDebitDesc = {props.handleDebitDesc} 
            savedDebits={props.savedDebits} />} />


            <Route path="/Credit" element={<Credit
            actualCredit = {props.actualCredit}  balance = {props.balance} 
            handleCredit = {props.handleCredit} handleGivenCredit = {props.handleGivenCredit}
            handleCreditDesc = {props.handleCreditDesc} 
            savedCredits={props.savedCredits}/>} />

        </Routes>
        </div>

  );

}
export default TransactionPage;
