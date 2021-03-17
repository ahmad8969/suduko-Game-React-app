import React, {useState} from 'react';
import './block.css'


const Block = (props)=>{
    var uniqueId = `${props.rowId}`+ `${props.colId}` ;
return(
    <div className="button_block">
    <button onClick={props.click}>{props.key}</button>
    </div>
    
)
}

export default Block;