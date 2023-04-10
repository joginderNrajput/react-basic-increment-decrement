import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function DecreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function ResetHandler(){
    setCount(0);
  }
  return (
  <div>
    <div className=" w-[100vw] h-[100vh] flex justify-center items-center bg-[#344151] flex-col gap-10">
    <div className="text-[#0398d4] font-medium text-2xl">Increment && Decrement</div>
    <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">
      <button onClick={DecreaseHandler} className="border-r-4 w-20 text-center border-[#bfbfbf] text-5xl">
      -
      </button>
      <div className="font-bold gap-12 text-5xl">
      {count}
      </div>
      <button onClick={increaseHandler} className="border-l-4 w-20 text-center border-[#bfbfbf] text-5xl" >
      +
      </button>
    </div>
    <div onClick={ResetHandler} className="cursor-pointer text-white bg-blue-500 border-2  border-white text-[25px] font-serif px-4 rounded-sm">Reset</div>
  </div>
  </div>
  );
}

export default App;
