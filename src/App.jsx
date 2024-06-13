import Sidebar from "./components/Sidebar";
import AddProjectModal from "./components/AddProjectModal";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";

function App() {
  const [projectSelected, setProjectSelected] = useState({
    projectId: undefined,
    projects: [],
  });

  let content;
  console.log(projectSelected.projects)
  if (projectSelected.projectId === undefined) {
    content = <NoProjectSelected onProjectAdd={onProjectAdd} />;
  } else if (projectSelected.projectId === null) {
    content = <AddProjectModal onSave={handleSaveProject} onCancel={handleCancel}/>;
  }

  function onProjectAdd() {
    setProjectSelected((prevProjects) => {
      return {
        ...prevProjects,
        projectId: null,
      };
    });
  }

  function handleSaveProject(projectData) {
    setProjectSelected((prevProjects) => {
      const newProject = { ...projectData, id: Math.random() };
      return {
        ...prevProjects,
        projectId: undefined,
        projects: [...prevProjects.projects, newProject],
      };
    });
  }

  function handleCancel(){
    setProjectSelected(prevProjects=>{
      return{
        ...prevProjects,
        projectId: undefined
      }
    })
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onProjectAdd={onProjectAdd} projects={projectSelected.projects}/>
      {content}
    </main>
  );
}

export default App;
