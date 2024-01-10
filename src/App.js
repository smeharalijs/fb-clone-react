import React from "react";
import { useState, useEffect } from "react";
import HomePage from "./Views/Home";
import "./App.css"


function App() {


  const [data, setData] = useState([])



  useEffect(function () {
    getapi()
  }, [])


  function getapi() {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products))

  }

  if (!data.length) {
    return <div>
      <img src="https://media1.giphy.com/media/3oEjI6SIIHBdRxXI40/200w.gif?cid=6c09b9525xi0ga8tm2aqs5k1en4oqr4hqx3v6ty7qb0e1j7x&ep=v1_gifs_search&rid=200w.gif&ct=g" />
    </div>
  }




  return (
    <div className="App">
      <header className="App-header">
        
        <HomePage posts={data}/>
        

      </header>

    </div>
  );
}

export default App;
