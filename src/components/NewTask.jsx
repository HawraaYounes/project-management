import { useState } from "react";

const NewTask = ({ onAdd }) => {
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }
  function handleClick(){
    onAdd(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex gap-4 items-center">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-100"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
};

export default NewTask;
