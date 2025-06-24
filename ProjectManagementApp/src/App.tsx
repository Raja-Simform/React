import './App.css'
import { useState } from "react"
import SideBar from './components/SideBar'
import NewProject from './components/NewProject'
import styled from 'styled-components'
import AddProject from './components/AddProject'
import Task from './components/Task'
const Container=styled.div`
        display: flex;
`
interface Project{
  title:string,
  description:string,
  dueDate:string
}
function App() {
  const [flag,setFlag]=useState(false);
  const [open,setOpen]=useState(false);
  const[index,setIndex]=useState(-1);
  const[projectData,setProjectData]=useState<Project[]>([])
  
  function handleAddBtn(){
    setFlag(true);
  }
  function handleSave(data:Project){
     setProjectData(prev=>[...prev,data])
     setFlag(false)
  }
  
  function handleOpen(key:number){
        setOpen(true);
        setIndex(key);
  }
  function handleDelete(key:number){
    setProjectData((prev) => prev.filter((_, i) => i !== key))
    setOpen(false)
    setIndex(-1)  
  }
  function handleCancel(){
         setFlag(false);
  }
  
  return (
    <Container>
     <SideBar  onAddBtn={handleAddBtn} ProjectData={projectData} onOpenBtn={handleOpen}/>
     {flag && <NewProject onSave={handleSave} onCancel={handleCancel}/>}     
     {!open && !flag && <AddProject onAddBtn={handleAddBtn} />} 
     {open && index!==-1&& (<Task projectData={projectData} index={index} onDeleteBtn={handleDelete}/>)}
    </Container>
  )
}

export default App
