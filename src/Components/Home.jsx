import React , {useState, useEffect} from 'react';
import Task from './Task.jsx'

const Home = () => {
    const [title, settitle] = useState("")
    const [description, setdescription] = useState("")
    const initialstate= localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];
    const [tasks, settasks] = useState(initialstate)

    const submithandler=(e)=>{
        e.preventDefault();
        settasks([...tasks , {
            title, 
            description
        }])
        settitle("");
        setdescription("")
    }

    const deletetask=(i)=>{
        const filteredarray= tasks.filter((element, index)=>{
            return i!==index; 
        })
        settasks(filteredarray)
    }

    useEffect(() => {
        console.log(tasks)
        localStorage.setItem("tasks", JSON.stringify(tasks))
      }
    , [tasks])
    
    return (
        <div className='container'>
            <h1 style={{textAlign: "center", 
                marginBottom:"40px", 
                color:"",
                fontFamily:"sansSerif",
                fontSize:"1.5rem"}}>

                DAILY GOALS IN REACT</h1>
            <form onSubmit={submithandler}>
                <input 
                type="text" 
                placeholder='Enter title' 
                value={title}
                onChange={(e)=> settitle(e.target.value)} />
                
                <textarea 
                placeholder='Enter description' 
                value={description}
                onChange={(e)=>setdescription(e.target.value)}>   
                </textarea> 
                
                <button type='submit'>Add</button>
                
            </form>
            {
                    tasks.map((current, index)=>{
                        return(
                            <Task title={current.title}
                            description={current.description}
                            key= {index}
                            deletetask={deletetask}
                            index={index}

                            />
                        ) 
                    })
                }
        </div>
    );
}

export default Home;
