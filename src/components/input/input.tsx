import * as React from 'react';

interface IInputProps extends Partial<HTMLInputElement>{
    labeltext ?:string;
}
export const Input:React.FC<IInputProps>=(props:IInputProps)=>{
    const{labeltext}=props;
    return(
       <label className="input-container">
           {labeltext ?labeltext:""}
           <input className="input-field"/>
        </label>
    );
};