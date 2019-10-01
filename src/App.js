import React from 'react';
import './App.css';
import {connect} from 'react-redux';
import { increment, decrement } from "./actions/actions";


function App(props) {
  return (
    <div className="App">
      <h1>Counter</h1>
      <button onClick={props.increment} >+</button>
      <span> {props.count}</span>
      <button onClick={props.decrement} > -</button>
    </div>
  );
}



 const mapStateToProps = state=>{

  return {
 count : state
   }
 }


  const mapDispatchToProps=dispatch =>{
    return { 
      increment:()=> {dispatch (increment())},
      decrement:()=> {dispatch (decrement())}
    

    
  }
  }



export default connect(mapStateToProps, mapDispatchToProps)(App)
