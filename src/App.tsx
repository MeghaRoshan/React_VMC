import React from 'react';
import {Chooseimage} from './components/choose-image/chooseimage';
import './App.css';
import { IStep } from './components/navigation/navigation';
import {Stepper} from './components/stepper/stepper';
import {Iprops} from './components/choose-image/chooseimage';
import {Navigator} from './components/navigation/navigation';



const App = (
  // props:Iprops
) => {
  return (
    
    <div className="App">
      <header className="App-header">
      <p className="header">HVC</p>
      </header>
      <div className="body">
      <div className="nav"><Navigator /></div>
      
      <aside><div className="cost-block">
        <h2>Cost Estimates</h2>
        <div className="list-entry">
  <p>image</p>
  {/* <div className="stepper-head"> {active && StepText}</div> */}
         <p>rate</p>
        </div>
        <div className="total-cost">total-cost</div>
        </div>
      </aside>
      </div>
    </div>
  );
}

export default App;
