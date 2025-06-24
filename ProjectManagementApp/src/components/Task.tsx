//import { useState } from "react"
import styled from "styled-components"

interface Project{
    title:string,
    description:string,
    dueDate:string
}
interface TaskProps{
    projectData:Project[],
    index:number,
    onDeleteBtn:(key:number)=>void,
}
const TaskContainer=styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    padding: 3rem;
    border: 1px solid red;
    .heading{
        display: flex;
        justify-content: space-between;
        align-items: center;

    }
    p{
        font-size: 1.5rem;
    }
`
export default function Task({projectData,index,onDeleteBtn}:TaskProps){
   // const [taskState,setTaskState]=useState();
    return(
        <TaskContainer>
          <div className="heading">
            <h2>{projectData[index].title}</h2>
            <button onClick={()=>onDeleteBtn(index)}>Delete</button>
          </div>
          <p>{projectData[index].dueDate}</p>
          <p>{projectData[index].description}</p>
          <div className="tasks">
               <h3>Tasks</h3>
                <div className="addTask">
                    <input type="text" />
                    <button>Add Task</button>
                </div>
                <div className="displaytask"></div>
          </div>
        </TaskContainer>
    )
}