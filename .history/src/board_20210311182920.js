import React, { useState, useMemo}  from 'react';   //{useState}  
import './App.css';
import Block from './components/block'
import NineBlock from './components/nineBlockComponent';
 
// function useForceUpdate(){
//   const [counter,setCounter]= useState(0);
//   return setCounter(counter+1);

  
// }
const Board = () => {
  const xAxis_Selection_Array_Right=   [];
  const xAxis_Selection_Array_Left=   [];
  const yAxis_Selection_Array_up=[];
  const yAxis_Selection_Array_Down=[];
  const DiagonalSelectionUpward_Selection_Array= [];
  const DiagonalSelectionUpwardLeftUp_selection_Array= [];
  const DiagonalSelectionDownward_selection_Array= [];
  const DiagonalSelectionDownwardLeftDown_selection_Array= [];
  const complete_blocks_Array = [];
  let complete_selection_array=[];

  const nine_block_Element_into_Nine = [0,1,2,3,4,5,6,7,8];
  const single_block_Into_Nine = [0,1,2,3,4,5,6,7,8];
  const [getting_current_id, setGetting_current_id]=useState();
  const [Iid, setIid]=useState();
  const [Jid, setJid]=useState();
  const [isClicked,  setIsClicked]= useState(false);
  const [count,setCount]= useState(0);
  
    
  
  
  
  const Click = (idOfSpecificButton,i,j,click) =>{
  
    setGetting_current_id(idOfSpecificButton);
    setIid(i); 
    setJid(j);
    setIsClicked(!click);
    setCount(count+1);

    console.log(Iid,Jid,getting_current_id);
  }
  
  const XaxisSelectionRight = (i,j)=>{
    for(let xAxis= j; xAxis<=8; xAxis++){
      let creatId= `${i}${xAxis}`;
      if(count===1){
        document.getElementById(creatId).style.backgroundColor=isClicked ? "indigo":null;
      xAxis_Selection_Array_Right.push(creatId);
      }
     
    }
  }
  const XaxisSelectionLeft = (i,j)=>{
    for(let xAxis= j; xAxis>=0; xAxis--){
      let creatId= `${i}${xAxis}`;
      if(count===1){
        document.getElementById(creatId).style.backgroundColor=isClicked ? "indigo":null;
      xAxis_Selection_Array_Left.push(creatId);
      }
    }
  }

  const YaxisSelectionDown = (i,j)=> {
    for(let xAxis1= i; xAxis1<=8; xAxis1++){
      let creatId=  `${xAxis1}${j}`;
      if(count===1){
        document.getElementById(creatId).style.backgroundColor=isClicked ? "indigo":null;
      yAxis_Selection_Array_Down.push(creatId);
      }
    }
  }
 const YaxisSelectionUp = (i,j)=> {
    for(let xAxis1= i; xAxis1>=0; xAxis1--){
     
      let creatId=  `${xAxis1}${j}`;
      if(count===1){
        document.getElementById(creatId).style.backgroundColor=isClicked ? "indigo":null;
      yAxis_Selection_Array_up.push(creatId);
      }
      
    }
  }

  const DiagonalSelectionUpward = (selectedId)=>{
  let array_of_length= nine_block_Element_into_Nine.length;
  console.log(array_of_length);
  console.log(typeof(array_of_length));
  let get_the_id_of_current_box= parseInt(selectedId);
  console.log(get_the_id_of_current_box); 
    for(let hello=get_the_id_of_current_box; hello>=0; hello-=array_of_length){
      if(hello<=9){
        if(hello===9){
          return;
        }else{
        var concatination = 0+`${hello}`;
          if(count===1){
        document.getElementById(concatination).style.backgroundColor=isClicked ? "indigo" : null ;
        DiagonalSelectionUpward_Selection_Array.push(concatination);
        }
      }
      } else if(hello===19 || hello===29 || hello===39 || hello===49 || hello===59 || hello===69 || hello===79){
        return;
      }
      else{
            if(count===1){
        document.getElementById(`${hello}`).style.backgroundColor=isClicked ? "indigo" : null ;
        DiagonalSelectionUpward_Selection_Array.push(`${hello}`);
        }
        

      }
      
    }
  }
        const DiagonalSelectionUpwardLeftUp = (selectedId)=>{
          let array_of_length= 2 + nine_block_Element_into_Nine.length;
          console.log(array_of_length);
          console.log(typeof(array_of_length));
          let get_the_id_of_current_box= parseInt(selectedId);
          console.log(get_the_id_of_current_box); 
            for(let hello=get_the_id_of_current_box; hello>=0; hello-=array_of_length){
              if(hello<=9){
                var concatination = 0+`${hello}`;
                       if(count===1){
                      document.getElementById(concatination).style.backgroundColor=isClicked ? "indigo" : null ;
                      DiagonalSelectionUpwardLeftUp_selection_Array.push(concatination);
                      }
                document.getElementById(concatination).style.backgroundColor="indigo";
                DiagonalSelectionUpwardLeftUp_selection_Array.push(concatination);
                return;
                
              } else if( hello===9 || hello===19 || hello===29 || hello===39 || hello===49 || hello===59 || hello===69 || hello===79){
                return;
              }
              else{
                if(count===1){
        document.getElementById(`${hello}`).style.backgroundColor=isClicked ? "indigo" : null ;
        DiagonalSelectionUpwardLeftUp_selection_Array.push(`${hello}`);
        }
              }
              console.log(DiagonalSelectionUpwardLeftUp_selection_Array);  
            }
            
          }


        const DiagonalSelectionDownward= (selectedId)=>{
          let array_of_length= nine_block_Element_into_Nine.length;
          console.log(array_of_length);
          console.log(typeof(array_of_length));
          let get_the_id_of_current_box= parseInt(selectedId);
          console.log(get_the_id_of_current_box); 
    for(let hello=get_the_id_of_current_box; hello<=88; hello+=array_of_length){
      if(hello===0){
        return;
      }
      else if(hello<=9){
        
        var concatination = 0+`${hello}`;
        if(count===1){
        document.getElementById(concatination).style.backgroundColor=isClicked ? "indigo" : null ;
        DiagonalSelectionDownward_selection_Array.push(concatination);
        }
      } else if(hello===19 || hello===29 || hello===39 || hello===49 || hello===59 || hello===69 || hello===79){
        return;
      }
      else{
        if(count===1){
        document.getElementById(`${hello}`).style.backgroundColor=isClicked ? "indigo" : null ;
        DiagonalSelectionDownward_selection_Array.push(`${hello}`);
        }
        
      }
      
      
    }console.log(DiagonalSelectionDownward_selection_Array)
        }
        const DiagonalSelectionDownwardLeftDown= (selectedId)=>{
          let array_of_length= 2 +  nine_block_Element_into_Nine.length;
  console.log(array_of_length);
  console.log(typeof(array_of_length));
  let get_the_id_of_current_box= parseInt(selectedId);
  console.log(get_the_id_of_current_box); 
    for(let hello=get_the_id_of_current_box; hello<=88; hello+=array_of_length){
      if(hello === 0){
        return;
      }
      else if(hello<=9){
        var concatination = 0+`${hello}`;
        if(count===1){
        document.getElementById(concatination).style.backgroundColor=isClicked ? "indigo" : null ;
        DiagonalSelectionDownwardLeftDown_selection_Array.push(concatination);
        }
        
      } else if( hello===19 || hello===29 || hello===39 || hello===49 || hello===59 || hello===69 || hello===79){
        return;
      }
      else{
        if(count===1){
        document.getElementById(`${hello}`).style.backgroundColor=isClicked ? "indigo" : null ;
        DiagonalSelectionDownwardLeftDown_selection_Array.push(`${hello}`);
        }
        
      }
      
    }console.log(DiagonalSelectionDownwardLeftDown_selection_Array);
        }
        
        
        const creatingReadOnlyBlock = () => {
          nine_block_Element_into_Nine.map((val)=>{
          return  single_block_Into_Nine.map((valu)=>{
              let valueOfId= `${val}${valu}`;  
              return complete_blocks_Array.push(valueOfId);
            });
          })
        }
        const filter_two_arrays= ()=> {
           complete_selection_array = [
            ...xAxis_Selection_Array_Right,
            ...xAxis_Selection_Array_Left,
            ...yAxis_Selection_Array_Down,
            ...yAxis_Selection_Array_up,
            ...DiagonalSelectionUpward_Selection_Array,
            ...DiagonalSelectionUpwardLeftUp_selection_Array,
            ...DiagonalSelectionDownward_selection_Array,
            ...DiagonalSelectionDownwardLeftDown_selection_Array
          ];
          console.log(complete_selection_array);
            let filteredId = complete_blocks_Array.filter((id) => !complete_selection_array.includes(id));
            filteredId.map((id) => {
              return (document.getElementById(id).disabled = true);
            });
        }
        const getting_the_selected_id= useMemo( () => {
          return complete_selection_array;
        })
       
        const changeStateHandler = (getting_current_id,Iid,Jid) => {
          document.getElementById(getting_current_id).style.color="green";
          XaxisSelectionRight(Iid,Jid);
          XaxisSelectionLeft(Iid,Jid);
          YaxisSelectionDown(Iid,Jid);
          YaxisSelectionUp(Iid,Jid);
          DiagonalSelectionUpward(getting_current_id);
          DiagonalSelectionDownward(getting_current_id);
          DiagonalSelectionDownwardLeftDown(getting_current_id);
          DiagonalSelectionUpwardLeftUp(getting_current_id);
          console(getting_the_selected_id())
          
          
        } 
         if(Iid && Jid && getting_current_id !=null){
          if(count>1){ 
             return (
    
    <div className="App">
    <h1>SUDUKO GAME </h1>
    <div className="board_nine_block_Style">
    {nine_block_Element_into_Nine.map((s,i)=>{
      return(
      <div>
      
      <NineBlock id={i}>
        {single_block_Into_Nine.map((s,j)=>
          
          
          <Block  rowId={i} idsss={()=>{getting_the_selected_id()}}  click={Click} colId={j} keys={`${i}${j}`} isclick={isClicked}></Block>
          
        )}

      </NineBlock>
      </div>
      )
    })  
    }
    </div>      
    </div>
  );
          }
          changeStateHandler(getting_current_id,Iid,Jid);
          creatingReadOnlyBlock();
          filter_two_arrays();
          
          
        } 

        
        
  
  return (
    
    <div className="App">
    <h1>SUDUKO GAME </h1>
    <div className="board_nine_block_Style">
    {nine_block_Element_into_Nine.map((s,i)=>{
      return(
      <div>
      
      <NineBlock id={i}>
        {single_block_Into_Nine.map((s,j)=>
          
          
          <Block  rowId={i}   click={Click} colId={j} keys={`${i}${j}`} isclick={isClicked}></Block>
          
        )}

      </NineBlock>
      </div>
      )
    })  
    }
    </div>      
    </div>
  );
}

export default Board;
