import { useState } from "react";
import axios from "axios";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [input2, setInput2] = useState("");
  const [result, setResult] = useState("");

  const performeOperation=async(operation)=>{
    try{
        const response=await axios.post(`http://localhost:3001/${operation}`,{
            input:parseFloat(input),
            input2:parseFloat(input2),
        });
        console.log(response)
        setResult(response)
    }catch(err){
        console.error(err);
    }

  }
  // const number=[{1:"1"},{2:"2"},{3:"3"},{4:"4"},{5:"5"},{6:"6"},{7:"7"},{8:"8"},{9:"9"},{10:"10"}]
  return (
    <div>
      <div>
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
      </div>
      <div>
        <input
          type="number"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
        ></input>
      </div>
      <button onClick={()=>performeOperation('add')}>Add</button>
      <button Click={()=>performeOperation('substract')}>Sub</button>
      <button onClick={()=>performeOperation('multiple')}>Multiple</button>
      <button onClick={()=>performeOperation('divide')}>Divide</button>
      <button>Result:{result}</button>
      <div>
        {/* {number?.map((calculateNewValue) => (
            <button>{calculateNewValue}</button>
        ))}
      */}
      </div>
      <div></div>
    </div>
  );
};

export default Calculator;
