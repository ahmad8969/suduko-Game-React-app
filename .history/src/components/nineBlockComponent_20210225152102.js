import React from 'react';
import Block from './block'
import './block.css'

const NineBlockBox = () =>{
    const single_block_Into_Nine = [1,2,3,4,5,6,7,8,9] 
    
    let check_Function = (i) =>{
        alert(i);
    }

    return (
        <div className="nine_block_Style">
        {single_block_Into_Nine.map((s, i)=>{
            return(
            <div style={{
                margin: '0px!important'
            }} >
                <Block number={s} value={i} click={check_Function(i)} />
            </div>
            )
        })
            
        }
        </div>
    )
}
export default NineBlockBox;