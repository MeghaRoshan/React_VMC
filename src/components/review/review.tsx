import * as React from 'react';
import {Card} from '../Card/Card';

export const Review=()=>{
    return(
        <Card>
        <div className="single-card" >
           
            <div className="gray-box"></div>
            <div className="text">
               <div className="title" id="1"> Linux 2</div>
                <div className="text1">Linux 2 comes with 5 years of support, It provides Linux kernel 4.14 tunes for optimal performance</div>
            </div>
            <div className=" btns">
            <span><input type="radio" name="x86" value="64-bit(x86)"/>64-bit(x86)</span>
            <span><input type="radio" name="ARM" value="64-bit(ARM)"/>64-bit(ARM)</span>
            <button className="select-btn" placeholder="Select">Select</button>
            </div>
            
        </div>
    </Card> 

    );
}