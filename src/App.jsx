import Sidebar from "./components/Sidebar";
import AddProjectModal from "./components/AddProjectModal";

function App() {
  return (
    <main className="h-screen my-8">
      <Sidebar/>
      <AddProjectModal />
    </main>
  );
}

export default App;
