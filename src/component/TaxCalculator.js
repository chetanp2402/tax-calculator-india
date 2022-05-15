
import { useState } from "react";
import TaxInputForm from "./TaxInputForm";

const TaxCalculator = ()=>{
   // const[initialAmount, setTaxAmount] = useState(0);
    const[count, setCount] = useState(0);
    const countHandler = () => setCount(count + 1)
return (
<div>
    <TaxInputForm/>
      <p>You clicked {count} times</p>
      <button onClick={countHandler}>
        Click me
      </button>
    </div>
);
    
    
}

export default TaxCalculator;