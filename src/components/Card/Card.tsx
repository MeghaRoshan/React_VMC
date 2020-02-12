import * as React from 'react';
import "./Cardstyle.css";

interface ICardProps{
    children: JSX.Element;
}
export const Card:React.FC<ICardProps> =(props:ICardProps)=>{
    return<div className="card-container">{props.children}</div>
};