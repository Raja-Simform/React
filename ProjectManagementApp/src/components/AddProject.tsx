import styled from "styled-components"

const AddProjectContainer=styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 50%;
    align-items: center;
    #newproject{
        width: 10rem;
        height: 3rem;
        border: 1px solid black;
        border-radius: 10px;
        cursor: pointer;
    }
    #newproject:hover{
        background-color: #2a2c2d;
    }
`
type AddprojectsProps= {onAddBtn: () => void};
   

export default function AddProject({onAddBtn}:AddprojectsProps){
    return(
       <AddProjectContainer>
         <h2>No Project Selected</h2>
         <p>Select a proeject or get started with a new one</p>
          <button id="newproject" onClick={onAddBtn}>Create new project</button>
       </AddProjectContainer>
    )
}