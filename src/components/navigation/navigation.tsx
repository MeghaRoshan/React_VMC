import React from 'react';
import './navigation.css';
import {Chooseimage} from '../choose-image/chooseimage';
import {Stepper} from '../stepper/stepper';
import {Chooseinstancetype} from '../choose-instance-type/chooseinstancetype';
import {Choosestorage} from '../choosestorage/choosestorage';
import {Configuresecurity} from '../configuresecurity/configuresecurity';
import {Review} from '../review/review';
import {Input} from '../input/input';

export interface INavigatorProps{
    
}
export interface IStep{
    StepText:string;
    Component:React.FC<any>;
    StepTitle: string;
    props:{};
    
}
export const Navigator: React.FC<INavigatorProps>=(
     props: INavigatorProps
    )=>{
        const steps:IStep[]=[
    {
        StepText:"Choose Image",
        Component: Chooseimage,
        StepTitle:"Choose Image",
        props:{ },
    },
    {
        StepText:"Choose Instance Type",
        Component:Chooseinstancetype,
        StepTitle:"Choose Instance Type",
        props:{ },
    },
    {
        StepText:"Choose Storage and Network",
        Component:Choosestorage,
        StepTitle:"Choose Storage and Network",
        props:{ },
    },
    {
        StepText:"Configure Security",
        Component:Configuresecurity,
        StepTitle:"Configure Security",
        props:{ },
    },
    {
        StepText:"Review and Launch",
        Component:Review,
        StepTitle:"Review and Launch",
        props:{ },
    },]

const [activeStep,setActiveStep]=React.useState(steps[0]);

const onStepClick=(step: IStep)=>{
    setActiveStep(step);};
    return(
        <section className="navigator-container">
           {steps.map((step:IStep, index:number)=> {
              return(<Stepper
               step={step}
               key={index}
               active={activeStep.StepText == step.StepText}
               onStepClick={onStepClick}>
                   <div className="lol"> <step.Component labeltext={step.StepTitle}/></div>
               </Stepper>);

           })} 
        </section>
    );
};