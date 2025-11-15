import React from "react";
import Card from "./components/Card";
import User from "./components/User";


const App = () => {
  let arr=[6,5,3,34,62,85]
  return (
    <div className="parent">

      <Card />
      <User name= {arr[3]}/>
      <User name='Ankit'/>
      <User name='Manu'/>
    </div>
  );
};

export default App;
