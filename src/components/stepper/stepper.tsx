import React from 'react';
import './stepper.css';
import { IStep } from '../navigation/navigation';
import {Card} from '../Card/Card';
import {Input} from '../input/input';



interface IStepperProps{
    step: IStep;
    children:any;
    active:boolean;
    onStepClick: (step:IStep)=>void;
}
export const Stepper:React.FC<IStepperProps>=(props: IStepperProps)=>{

 const{children, step,active}=props;


 const onStepClick=()=>props.onStepClick(step);
    
 return(
     <div>
    <div className="stepper-head"> {active && step.StepText}</div>
     <section className="stepper">
         
       <div className="stepper-top">
          <button className= {'stepper-btn ${active ? "_active" : ""}'}
          onClick={onStepClick}>
              {step.StepText}
          </button>

       </div>
      
     </section>
     <div className="stepper-down">
           {active && children}
       </div></div>
 );
};
