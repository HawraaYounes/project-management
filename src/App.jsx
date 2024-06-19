import Sidebar from "./components/Sidebar";
import AddProjectModal from "./components/AddProjectModal";
import NoProjectSelected from "./components/NoProjectSelected";
import { useState } from "react";
import SelectedProjectDetails from "./components/SelectedProjectDetails";

function App() {
  const [projectSelected, setProjectSelected] = useState({
    projectId: undefined,
    projects: [],
    tasks: [],
  });
  const selectedProject = projectSelected.projects.find(
    (project) => project.id === projectSelected.projectId
  );

  function handleAddTask(text) {
    setProjectSelected((prevProjects) => {
      const newTask = {
        text: text,
        projectId: prevProjects.projectId,
        id: Math.random(),
      };
      return {
        ...prevProjects,
        tasks: [newTask, ...prevProjects.tasks],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectSelected((prevProjects) => {
      return {
        ...prevProjects,
        tasks: prevProjects.tasks.filter((task) => task.id !== id),
      };
    });
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

  function handleSelectProject(id) {
    setProjectSelected((prevProjects) => {
      return {
        ...prevProjects,
        projectId: id,
      };
    });
  }

  function handleCancel() {
    setProjectSelected((prevProjects) => {
      return {
        ...prevProjects,
        projectId: undefined,
      };
    });
  }

  function handleDeleteProject() {
    setProjectSelected((prevProjects) => {
      return {
        ...prevProjects,
        projectId: undefined,
        projects: prevProjects.projects.filter(
          (project) => project.id !== prevProjects.projectId
        ),
      };
    });
  }

  let content = (
    <SelectedProjectDetails
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectSelected.tasks}
    />
  );
  if (projectSelected.projectId === undefined) {
    content = <NoProjectSelected onProjectAdd={onProjectAdd} />;
  } else if (projectSelected.projectId === null) {
    content = (
      <AddProjectModal onSave={handleSaveProject} onCancel={handleCancel} />
    );
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar
        onProjectAdd={onProjectAdd}
        projects={projectSelected.projects}
        onSelect={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
