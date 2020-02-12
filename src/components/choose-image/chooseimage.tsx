import * as React from 'react';
import './choose-image.css';
import {regionTypes} from '../constants/constants';
import {imagetitle} from '../constants/constants';
import {imagetext} from '../constants/constants';
import {Card} from '../Card/Card';
// interface Iprops{
//     region:string;
// }


export const Chooseimage = () => {
    const [region, setRegion]=React.useState('');

    const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRegion(event.target.value);};
return(

<section className="main">
    <div className="heading">
     <p>Choose Image</p>
     
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
        <div className="single-card">
            <div className="gray-box"></div>
            <div className="text">
               <div className="title"> LINUX 2</div>
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
               <div className="title">Ubuntu Server 18.04 LTS</div>
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
               <div className="title">Red Hat Enterprise Linux 8</div>
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
               <div className="title"> Microsoft Windows Server 2019 Base</div>
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
               <div className="title">SUSE Linux Enterprise Server</div>
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
