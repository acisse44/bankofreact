import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import UserProfile from "./components/UserProfile";
import TransactionPage from "./components/TransactionPage"; 

function App() {
    const [actualDebit, setActualDebit] = useState(0); //entered debit amount 
    const [actualCredit, setActualCredit] = useState(0);//entered credit amount 
    const [balance, setBalance] = useState(0); //will keep track of the entire balance
    const [creditAmount, setCreditAmount] = useState(0); //amount the user wishes to credit
    const [debitAmount, setDebitAmount] = useState(0); //amount the user wishes to debit
    const [savedDebits, setSavedDebits] = useState([]); //keeping track & storing the debits made
    const [savedCredits, setSavedCredits] = useState([]); //keeping track & storing the credits made
    const [transactionCredit, setTransactionCredit] = useState(0);  
    const [creditDesc, setCreditDesc] = useState("");
    const [transactionDebit, setTransactionDebit] = useState(0);  //what the user enters in the form  
    const [debitDesc, setDebitDesc] = useState(""); //description of the debits 

    const date = new Date(); //Creating a date object to post the dates of the given transactions
    const currentDate = date.toLocaleDateString();


    useEffect(() => { //fetching data from api link for credit and storing into loadCredit
        async function loadCredit() {
          try {
            const response = await fetch(
              `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/credits`
            );
            const data = await response.json();
            setActualCredit(data);
          } catch (error) {
            console.log(error);
          }
        }
        loadCredit();
      }, []);

    useEffect(() => {
        async function loadDebit() { //fetchinng data from api link for debit and storing into loadDebit
          try {
            const response = await fetch(
              `https://bank-of-react-b745wfs0u-ajlapid718.vercel.app/debits`
            );
            const data = await response.json();
            setActualDebit(data);
          } catch (error) {
            console.log(error);
          }
        }
        loadDebit();
      }, []);

      useEffect(() => { //we want to set the initial balance, which is the initial credits-debits
        setBalance(actualCredit - actualDebit);
      }, [actualCredit, actualDebit]
      );

  
      function handleCredit(event) {  //handles the given credit amount by setting it
        setCreditAmount(event.target.value);
        setTransactionCredit(event.target.value); 
      }

      function handleGivenCredit(event) { //handles the given credit by setting the balance amount and adding into our array of credits
        setBalance(balance => balance + Number(creditAmount)); 
        setSavedCredits([...savedCredits, {transactionCredit, creditDesc, currentDate}]); 
      }

      function handleCreditDesc(event) { //keeping track of the descriptions 
        setCreditDesc(event.target.value); 
      }

      function handleDebit(event) { //handles the given credit amount by setting it
        setDebitAmount(event.target.value);
        setTransactionDebit(event.target.value);
      }
    
      function handleGivenDebit(event) {//handles the given debit by setting the balance and adding into our array of debits
        setBalance(balance => balance - Number(debitAmount));
        setSavedDebits([...savedDebits, {transactionDebit, debitDesc, currentDate}]);
      }

      function handleDebitDesc(event) { 
        setDebitDesc(event.target.value); 
      }
  return (
    <Router> 
      <div className="App">
        <nav>
          <ul>
            <button id = "homeLink">
              <Link to="/">Home</Link> {/*  */}
            </button>
            <button id= "userLink">
              <Link to="/userProfile">UserProfile</Link> 
            </button>
          </ul>
        </nav>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userProfile" element={<UserProfile />} />
          <Route path="/TransactionPage/*" element={<TransactionPage 
            actualDebit = {actualDebit} actualCredit = {actualCredit}  balance = {balance} 
            handleCredit = {handleCredit} handleGivenCredit = {handleGivenCredit}
            handleDebit = {handleDebit} handleGivenDebit = {handleGivenDebit}
            handleCreditDesc = {handleCreditDesc} handleDebitDesc = {handleDebitDesc} 
            savedDebits={savedDebits} savedCredits={savedCredits} currentDate ={currentDate}/>} />

           {/*<Route path="/TransactionPage/Debit" element={<Debit />} />
          <Route path="/AccountBalance/Credit" element={<Credit />} />*/}

        </Routes>
      </div>
    </Router>
  );
}

export default App; 