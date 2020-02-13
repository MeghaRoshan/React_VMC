import * as React from 'react';
import './choose-image.css';
import {regionTypes} from '../constants/constants';
import {title} from '../constants/constants';
import {text1} from '../constants/constants';
import {Card} from '../Card/Card';
 export interface Iprops{
     region:string;
       imgtitle:string;
       text1:string;
       id:string;
 }


export const Chooseimage :React.FC<Iprops>  = (props:Iprops) => {
    const [region, setRegion]=React.useState('');
    // const [title,setTitle]=React.useState('');
    // const[text1,setText1]=React.useState('');
    // const[value,setValue]=React.useState('');

    const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRegion(event.target.value);};
    // const onTitleChange=(event:React.ChangeEvent<HTMLSelectElement>) =>{
    //     setTitle(event.target.value);};
    
return(

<section className="main">
    <div className="heading">
     <p></p>
     
     <label>
     <select className="region" placeholder="Region" onChange={onRegionChange} value={region}>
                            {regionTypes.map((region: string) => (
                                <option value={region}>{region}</option>
                            ))}
                        </select>
     </label>
    </div>
    
    <div className="steps">
         <button className="step-block1">1. Choose Image</button>
        <button className="step-block2">2. Choose Instance Type</button>
        <button className="step-block3">3. Choose Storage and Network</button>
        <button className="step-block4">4. Configure Security</button>
        <button className="step-block5">5. Review & Launch</button>
    </div>

    <div className="cards">
        
    <Card>
        <div className="single-card" >
            {/* { title.map((imgtitle:string) => { */}
           
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
    <Card>
        <div className="single-card">
            <div className="gray-box"></div>
            <div className="text">
               <div className="title" id="2">Ubuntu Server 18.04 LTS</div>
                <div className="text1">Linux 2 comes with 5 years of support, It provides Linux kernel 4.14 tunes for optimal performance</div>
            </div>
            <div className=" btns">
            <span><input type="radio" name="x86" value="64-bit(x86)"/>64-bit(x86)</span>
            <span><input type="radio" name="ARM" value="64-bit(ARM)"/>64-bit(ARM)</span>
            <button className="select-btn" placeholder="Select">Select</button>
            </div>
        </div>
    </Card> 
    <Card>
        <div className="single-card">
            <div className="gray-box"></div>
            <div className="text">
               <div className="title" id="3">Red Hat Enterprise Linux 8</div>
                <div className="text1">Linux 2 comes with 5 years of support, It provides Linux kernel 4.14 tunes for optimal performance</div>
            </div>
            <div className=" btns">
            <span><input type="radio" name="x86" value="64-bit(x86)"/>64-bit(x86)</span>
            <span><input type="radio" name="ARM" value="64-bit(ARM)"/>64-bit(ARM)</span>
            <button className="select-btn" placeholder="Select">Select</button>
            </div>
        </div>
    </Card> 
    <Card>
        <div className="single-card">
            <div className="gray-box"></div>
            <div className="text">
               <div className="title" id="4"> Microsoft Windows Server 2019 Base</div>
                <div className="text1">Linux 2 comes with 5 years of support, It provides Linux kernel 4.14 tunes for optimal performance</div>
            </div>
            <div className=" btns">
            <span><input type="radio" name="x86" value="64-bit(x86)"/>64-bit(x86)</span>
            <span><input type="radio" name="ARM" value="64-bit(ARM)"/>64-bit(ARM)</span>
            <button className="select-btn" placeholder="Select">Select</button>
            </div>
        </div>
    </Card> 
    <Card>
        <div className="single-card">
            <div className="gray-box"></div>
            <div className="text">
               <div className="title" id="5">SUSE Linux Enterprise Server</div>
                <div className="text1">Linux 2 comes with 5 years of support, It provides Linux kernel 4.14 tunes for optimal performance</div>
            </div>
            <div className=" btns">
            <span><input type="radio" name="x86" value="64-bit(x86)"/>64-bit(x86)</span>
            <span><input type="radio" name="ARM" value="64-bit(ARM)"/>64-bit(ARM)</span>
            <button className="select-btn" placeholder="Select">Select</button>
            </div>
        </div>
    </Card> 
       
        
        
    </div>
</section>
);
};
