import { useRef, useState } from "react";

export default function Player() {
    const [input,setInput]=useState<string|null>(null);
    const ref=useRef<HTMLInputElement|null>(null);
    function handleClick(){
         if(ref.current){
          setInput(ref.current.value);
          ref.current.value='';
         }
    }
    return (
      <section id="player">
        <h2>Welcome {input ||"unknown entity"}</h2>
        <p>
          <input type="text" ref={ref} />
          <button onClick={handleClick}>Set Name</button>
        </p>
      </section>
    );
  }
  