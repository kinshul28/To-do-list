import React from 'react';

const Task = ({title, description, deletetask, index}) => {
  return (
    <div className='task'>
      <div>
        <p 
        style={{textTransform:'uppercase',
        marginBottom:"5px"


        }}>
            {`${index+1}.`} {title}</p>
        <p className='span' style={{
            paddingLeft:"18px",
            textAlign:"justify"
        }}
        >{description}</p>
     </div>
     
        <button className='deletebutton' onClick={()=>deletetask(index)}>-</button>
    
    </div>
  );
}

export default Task;
