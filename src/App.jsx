import { useEffect, useState } from 'react';
import FormTodo from './components/FormTodo';
import SingleTodo from './components/SingleTodo';
import TitleCounter from './components/TitleCounter';
import { lStorageState } from './utils/locStorage';

function App() {
  const [tasks, setTasks] = useState(lStorageState);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(tasks));
  }, [tasks]);

  function addTask(taskName) {
    const timestamp = new Date();
    const formattedTimestamp = formatTimestamp(timestamp);
    const task = {
      taskName,
      checked: false,
      timestamp: timestamp,
      formattedTimestamp: formattedTimestamp,
    };

    setTasks([...tasks, task]);
  }

  function formatTimestamp(timestamp) {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      month: '2-digit',
      day: '2-digit',
      year: '2-digit',
    };
    return timestamp.toLocaleString(undefined, options);
  }

  function handleUpdateTaskDone(taskIndex, newDone) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskIndex].checked = newDone;
      return newTasks;
    });
  }

  function handleRenameTodo(taskindex, newTaskName) {
    setTasks((prev) => {
      const newTasks = [...prev];
      newTasks[taskindex].taskName = newTaskName;
      return newTasks;
    });
  }

  return (
    <main className='grid h-screen place-content-center text-center text-white p-0 m-0 box-border'>
      <TitleCounter tasks={tasks} />
      <FormTodo addTask={addTask} />
      {tasks.map((item, index) => {
        return (
          <SingleTodo
            {...item}
            key={index}
            setTasks={setTasks}
            tasks={tasks}
            id={index}
            item={item}
            onToggle={(checked) => handleUpdateTaskDone(index, checked)}
            handleRenameTodo={(taskName) => handleRenameTodo(index, taskName)}
          />
        );
      })}
    </main>
  );
}

export default App;
