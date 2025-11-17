import React from "react";
import Card from "./components/Card";
import User from "./components/User";


const App = () => {
  let arr=[6,5,62,85]
  return (
    <div className="parent">
      {arr.map(function(item){
        return <h1>{item+3}</h1>;
      })}
    </div>
  );
};

export default App;
