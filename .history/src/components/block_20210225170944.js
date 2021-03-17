import React, {useState} from 'react';
import './block.css'

const Block = (props) =>{

    let[value, setValue]= useState(props.number);
   
    // const changeState = () =>{ 
    //     let getting_new_value = prompt('enter New Value:', 'enter digit' );
    //     if(getting_new_value <=10){
    //         setValue(getting_new_value);
    //     }else{
    //         alert('enter digits 0-9 please'  +  getting_new_value  +  'is invalid number')
    //     }
        
        
    // }
    const changeState = () =>{ 
        let stateValue = document.getElementById('valueOfState');
        stateValue.style.display ='none';
        var input1=  document.createElement('INPUT');
        input1.setAttribute("type", "text");
        input1.setAttribute("value", "Hello World!");
        input1.style.height= '50px';
        input1.style.width= '50px';
        input1.backgroundColor='pink';
        // input1.style.backgroundImage= 'url(../images/wood.jpg)';
        input1.style.fontSize= '20px';
        input1.style.fontWeight='600'
        input1.style.color='black'

        let num = input1.value.target
        console.log(num)
        setValue(num);

        
        
    }
  
   
   
   
   
    return (
        <div className="button_block">
            <button onClick={changeState}> <span id="valueOfState">{value}</span> </button>
        </div>
    )
}

export default Block;