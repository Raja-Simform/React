import { useState } from "react";
import Memo from "./Memo";

export default function Product() {
  const [state, setState] = useState(0);
  return (
    <>
      Welcome to Product Page
      <button onClick={() => setState((prev) => prev + 1)}>
        Click To Increment
      </button>
      <div>{state}</div>
      <Memo  prop1={1} prop2={2} />
    </>
  );
}
