import * as React from 'react';
import './choose-instance-type.css';
import {Review} from '../review/review';

// export interface IChooseinstanceprops{

// }

export const Chooseinstancetype = () =>{
    const[showgp,setShowgp]= React.useState(false);
    
return(

<section className="main">
    <div className="heading">
     <p>Choose Image</p>
     
     <div><select className="region" placeholder="Region">
     <option value="US-East-1">US-East-1</option>
     <option value="Asia pacific - Mumbai">Asia pacific - Mumbai</option>
     <option value="US-West-1">US-West-1</option>
     </select></div>
     
    </div>
    
    <div className="choose-type">
<button className="generalpurpose" onClick={()=>setShowgp(!showgp)}> General purpose</button>

<button className="cpuoptimised">CPU Optimised</button>
<button className="storageoptimised">Storage Optimised</button>
<button className="networkoptimised">Network Optimised</button>
    </div>
    {/* {return(showgp && {Review});}; */}
    
</section>
);
}