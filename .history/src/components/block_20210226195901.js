import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    const [value, setValue]= useState(props.number);
    const [isClicked,  setIsClicked]= useState(false);

    var uniqueId = `${props.boardId}`+ `${props.keyId}` ;
    const [pid] = useState( uniqueId) 
    let checkId = (e)=>{
        setIsClicked(!isClicked);
                    
    }
    
  if(isClicked){
   return <input type="text" className="button_block1" />
  }
   
   
   
   
    return (
        <div className="button_block">
            <button id={pid} onClick={(e)=>checkId(e)} value={value} >{value} </button>
            {/* <button onClick={checkId} > <span id="valueOfState">{props.number}</span> </button> */}
         </div>
    )
}

export default Block;