import React, { useState } from 'react'

const TaxInputForm = () => {
    const [income, setIncome]= useState(0);
    const[tax, setTax] = useState(0);
    const[taxRegime, setTaxRegime]= useState("");
    

    const incomeHandler = (e) => {
        const income = e.target.value;
        setIncome(income); 
    }

    const taxRegimeHandler = (e) => {
      e.preventDefault();
      console.log(e);
      const taxRegime = e.target.value;
      setTaxRegime(taxRegime); 
  }

    const submitHandler = (event) => {
        console.log(event)
        event.preventDefault();
        console.log(taxRegime);
        if(income !== 0){
          if(taxRegime === 'old'){
            const tax = (income * 10)/100;
            setTax(tax);
          }
          else if(taxRegime==='new'){
            const tax = (income * 5)/100;
            setTax(tax);
          }else{
            setTax(0);
          }
      }
      }
    
  return (
    <div className="container-fluid">
<form>
<div className="row mb-3 offset-sm-3">
          <label htmlFor="inputTaxRegime" className="col-sm-2 col-form-label">Tax Regime</label>
          <div className='col-sm-5'>
            <select onChange={taxRegimeHandler} className="form-select">
              <option defaultValue={"Select Tax Regime"}>Select Tax Regime</option>
              <option value="old">Old tax regime</option>
              <option value="new">New tax regime</option>

            </select>
          </div>
        </div>
    <div className="row mb-3 offset-sm-3" >
        <label htmlFor="inputIncome" className="col-sm-2 col-form-label">Enter Income</label>
        <div className="col-sm-5 " >
            <input type="number" className="form-control" id="inputIncome" placeholder="Income"
            value={income}
            onChange={incomeHandler}/>
        </div>
    </div>

  
    <div className="row">
        <div className="d-flex justify-content-center flex-nowrap" onClick={submitHandler}>
            <button type="submit" className="btn btn-primary ">
              Calculate Tax
            </button>
        </div>
    </div>
    <br></br>
    <h4 className="text-center">The calculated tax is {tax}</h4>
</form>
</div>
  )
}

export default TaxInputForm;