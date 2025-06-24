import { useState } from "react";
import styled from "styled-components"

const Form=styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    padding:2rem;
    gap: 1rem;
    justify-content: center;
    .header{
        display: flex;
        margin-left: auto;
        gap: 4rem;
    }
    .header button{
        height: 30px;
        width: 70px;
    }
    input{
        height: 30px;
    }
    #description{
        height: 6rem;
        font-size: 1rem;
    }
`

interface NewProjectProps {
    onSave: (data: {
      title: string;
      description: string;
      dueDate: string;
    }) => void;

    onCancel: () => void;
}

export default function NewProject({onSave,onCancel}:NewProjectProps){
    const[data,setData]=useState({
        title: "",
        description: "",
        dueDate: "",
    })
    function handleChange(e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ){
          setData(prev=>({...prev,[e.target.id]:e.target.value}))
    }

    return(
        <Form>
          <div className="header">
            <button onClick={onCancel}>Cancel</button>
            <button onClick={()=>onSave(data)}>Save</button>
          </div>
          <label htmlFor="title">TITLE</label>
          <input type="text" value={data.title} id="title" onChange={(e)=>handleChange(e)}/>
          <label htmlFor="description">DESCRIPTION</label>
          <textarea  id="description" value={data.description} onChange={(e)=>handleChange(e)}/>
          <label htmlFor="">DUEDATE</label>
          <input type="date" value={data.dueDate} id="duedate" onChange={(e)=>handleChange(e)}/>
        </Form>
    )
}