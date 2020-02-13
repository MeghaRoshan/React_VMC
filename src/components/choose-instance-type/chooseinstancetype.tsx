import * as React from 'react';
import './choose-instance-type.css';
import {regionTypes} from '../constants/constants';


 export interface IChooseinstanceprops{
     region: string;
}

export const Chooseinstancetype = () =>{
    const[showgp,setShowgp]= React.useState(false);
    const[region,setRegion]=React.useState('');

    const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRegion(event.target.value);};
    
return(

<section className="main">
    <div className="heading">
     <p>Choose Instance Type</p>
     
     <label>
     <select className="region" placeholder="Region" onChange={onRegionChange} value={region}>
                            {regionTypes.map((region: string) => (
                                <option value={region}>{region}</option>
                            ))}
                        </select>
     </label>
     
    </div>
    
    <div className="choose-type">
<button className="generalpurpose" 
// onClick={()=>setShowgp(!showgp)}
> General purpose</button>

<button className="cpuoptimised">CPU Optimised</button>
<button className="storageoptimised">Storage Optimised</button>
<button className="networkoptimised">Network Optimised</button>
    </div>
    {/* {return(showgp && {Review});};  */}
    
</section>
);
}