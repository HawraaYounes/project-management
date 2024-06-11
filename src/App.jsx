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
  if (projectSelected.projectId === undefined) {
    content = <NoProjectSelected onProjectAdd={onProjectAdd} />;
  } else if (projectSelected.projectId === null) {
    content = <AddProjectModal />;
  }

  function onProjectAdd() {
    setProjectSelected((prevProjects) => {
      return {
        ...prevProjects,
        projectId: null,
      };
    });
  }
  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar onProjectAdd={onProjectAdd}/>
      {content}
    </main>
  );
}

export default App;
