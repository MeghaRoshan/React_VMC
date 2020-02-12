import React from 'react';
import logo from './logo.svg';
import {Chooseimage} from './components/choose-image/chooseimage';
import './App.css';
import {Navigator} from './components/navigation/navigation';


const App = () => {
  return (
    
    <div className="App">
      <header className="App-header">
      <p className="header">HVC</p>
      </header>
      <div className="body">
      <div className="nav"><Navigator /></div>
      {/* <div className="nav"><Navigator /></div>  */}
      
      <aside><div className="cost-block">
        <p>Cost Estimates</p>
        <div className="list-entry">
         <p>image</p>
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
