import * as React from 'react';
import './choose-instance-type.css';
import {regionTypes} from '../constants/constants';
import {coreTypes} from '../constants/constants';
import {memoryTypes} from '../constants/constants';


 export interface IChooseinstanceprops{
     region: string;
     cores:string;
}

export const Chooseinstancetype = () =>{
    const[showgp,setShowgp]= React.useState(false);
    const[region,setRegion]=React.useState('');
    const[cores,setCores]=React.useState('');
    const[memory,setMemory]=React.useState('');

    const onRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setRegion(event.target.value);};
    const onCoreChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
            setCores(event.target.value);};
    const onMemoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
                setMemory(event.target.value);};
        
    
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
    
    <div className="choose-type">
<button className="generalpurpose" 
// onClick={()=>setShowgp(!showgp)}
> General purpose</button>

<button className="cpuoptimised">CPU Optimised</button>
<button className="storageoptimised">Storage Optimised</button>
<button className="networkoptimised">Network Optimised</button>
    </div>
    {/* {return(showgp && {Review});};  */}
    <label>
     <select className="cpucores" placeholder="CPU Cores" onChange={onCoreChange} value={cores}>
                            {coreTypes.map((cores: string) => (
                                <option value={cores}>{cores}</option>
                            ))}
                        </select>
     </label>
     <label>
     <select className="memory" placeholder="Memory" onChange={onMemoryChange} value={memory}>
                            {memoryTypes.map((memory: string) => (
                                <option value={memory}>{memory}</option>
                            ))}
                        </select>
     </label>

</section>
);
}