import styled from "styled-components";
// import Form from "./Form";
interface Project {
  title: string;
  description: string;
  dueDate: string;
}
interface SideBarProps {
  onAddBtn: () => void;
  ProjectData: Project[];
  onOpenBtn:(key:number)=>void;
}
export default function SideBar({ onAddBtn, ProjectData,onOpenBtn }: SideBarProps) {
  const LeftSection = styled.section`
    width: 25%;
    padding: 10px;
    border: 1px solid red;
    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .project {
      display: block;
      width: 100%;
      margin: 0.25rem 0;
      padding: 0.5rem;
      text-align: left;
      background: #070707;
      border: none;
      cursor: pointer;
      border-radius: 4px;
      font-size: 1.5rem;
    }

    .project hover {
      background: #1b1919;
    }
  `;

  return (
    <LeftSection>
      <div className="header">
        <h1>Your Projects</h1>
        <button onClick={onAddBtn}>+Add Project</button>
      </div>

      {ProjectData.map((value, index) => (
        <button onClick={()=>onOpenBtn(index)} className="project" key={index} title={value.description}>
          {value.title}
        </button>
      ))}
    </LeftSection>
  );
}
