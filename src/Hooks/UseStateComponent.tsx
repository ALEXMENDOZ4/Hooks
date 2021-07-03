import React, { useState } from "react";

export default function UseStateComponent() {
  const [arr, arrSet] = useState<number[]>([]);
  const [name, setname] = useState<string[]>([]);

  function aumentar() {
    arrSet([...arr, arr.length + 1]);
  }

  function fname(){
    setname([...name,"alex"]);
  }

  return (
    <div>
      <div>
        <button className="btn btn-primary me-5" onClick={aumentar}>
          add to array
        </button>
        <div className="mt-4">{JSON.stringify(arr)}</div>
        <button className="btn btn-primary me-5" onClick={fname}>
          set name
        </button>
        <div className="mt-4">{JSON.stringify(name)}</div>
      </div>
    </div>
  );
}
