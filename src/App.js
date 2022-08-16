import './App.css'
import { useState } from 'react';
function App()
{
  const [calc, setCalc] = useState("");
  const [result,setResult]=useState("");
  const ops=['/','*','+','-','.'];


  const calculate = () =>{
    setCalc(eval(calc).toString());
    setCalc('');
  }


  const updateCalc = value =>{
    if (
      ops.includes(value) && calc ==''||
      ops.includes(value) && ops.includes(calc.slice(-1))
    )
    {
      return ;
    }
    if (!ops.includes(value)){
      setResult(eval(calc+value).toString());
    }
    setCalc(calc+value)
  }
  const createDigits = () => {
    const digits = [];
    for(let i=1;i<10;i++)
    {
      digits.push(
        <button onClick={() =>updateCalc(i.toString())}
         keys={i}>{i}</button>
      )
    }
    return digits;
  }


const deletelast = () =>{
  if (calc =='')
  {
    return;
  }


  const value=calc.slice(0,-1);
  setCalc(value);
}
const clearall =() =>{
  const value="";
  setCalc(value);
  const result="";
  setResult(result);
}
  return(
    
    <><br></br><h1>Basic calculator</h1>
    <div className="App">
          <title>calculator</title>

      <div className="calculator">
        <div className="display">
         { calc || "0"}<br></br>{result ? <span>={result}</span> : '' } 
        </div>
        <div className="operators">
        <button onClick={() =>clearall()}>AC</button>
          <button onClick={() =>deletelast()}>DEL</button><br></br>
          <br></br>
          <button onClick={() =>updateCalc('+')}>+</button>
          <button onClick={() =>updateCalc('-')}>-</button>
          <button onClick={() =>updateCalc('*')}>*</button>
          <button onClick={() =>updateCalc('/')}>/</button>
          
          
        </div>
        <div className="digits">
        {createDigits()}

        
        <button onClick={() =>updateCalc('.')}>.</button>
        <button onClick={() =>updateCalc('0')}>0</button>
        <button onClick={() =>calculate()}>=</button>
        </div>
      </div>
    </div>
    <h2>designedby<br></br>@vishnu</h2>
    </>
  )
}

export default App;