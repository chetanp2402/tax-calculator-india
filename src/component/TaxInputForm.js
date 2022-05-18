import React, { useState } from 'react'
import './TaxInputForm.css'

const TaxInputForm = () => {
    const [income, setIncome]= useState(0);
    const[tax, setTax] = useState(0);
    

    const incomeHandler = (e) => {
        const income = e.target.value;
        setIncome(income); 
    }

    const submitHandler = (event) => {
        console.log(event)
        event.preventDefault();
        if(income !== 0){
          const tax = (income * 10)/100;
          setTax(tax);
          
      }
      }
    
  return (
    <div>
        <form onSubmit={submitHandler}>
        <label>Enter your Income:
        <input type = "number"  
        value={income}
        onChange={incomeHandler}/>
        </label>
        
        <button onClick={submitHandler}>Calculate Tax</button>
        </form>

        
          <p>The calculated tax is {tax}</p>
        
         
        
        
    </div>
  )
}

export default TaxInputForm;