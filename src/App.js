// import React, { useState, useEffect } from 'react';
// import List from './components/list';
// import axios from 'axios';
// import { baseURL } from './utils/constant';

// const App = () => {
//   const [input, setInput] = useState("");
//   const [tasks, setTasks] = useState([]);
//   const [updateUI, setUpdateUI] = useState(false);

//   useEffect(() => {
//     axios.get(`${baseURL}/get`).then((res)=>{
//       console.log(res.data);
//       setTasks(res.data);
//     });
//   }, [updateUI]);

//   const addTask = () => {
//     axios.post(`${baseURL}/save`, {task: input}).then((res)=>{
//       console.log(res.data);
//       setInput("");
//     });
//   }
  

//   return (
//     <main className='main'>
//       <h1 className='title'>CRUD Operations</h1>

//       <hr width="250" />
//       <div className='input_holder'>
//         <input type='text' value={input} onChange={(e)=>setInput(e.target.value)} required />

//         <button type='submit' onClick={addTask(input)}>Add Task</button>
//       </div>

//       <hr width="250" />
//       <ul>
//         {tasks.map(task => (
//           <List key={task._id} id={task._id} task={task.task} setUpdateUI={setUpdateUI} />
//         ))}
//       </ul>
//     </main>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import List from './components/list';
import axios from 'axios';
import { baseURL } from './utils/constant';

const App = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [updateUI, setUpdateUI] = useState(false);
  const [updateID, setUpdateID] = useState(null);

  useEffect(() => {
    axios.get(`${baseURL}/get`).then((res) => {
      setTasks(res.data);
    });
  }, [updateUI]);

  const addTask = () => {
    axios.post(`${baseURL}/save`, { task: input }).then((res) => {
      setTasks([...tasks, res.data]);
      setInput("");
      setUpdateUI((prevState) => !prevState)
    });
  };

  const updateMode = (id, text) => {
    console.log(text);
    setInput(text);
    setUpdateID(id);
  };

  const updateTask = () => {
    axios.put(`${baseURL}/update/${updateID}`, {task: input}).then((res)=>{
      console.log(res);
      setUpdateUI((prevState) => !prevState);
      setUpdateID(null);
      setInput("");
    });
  };

  return (
    <main className="main">
      <h1 className="title">CRUD Operations</h1>

      <hr width="250" />
      <div className="input_holder">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          required
        />

        <button type="submit" onClick={updateID ? updateTask : addTask}>{updateID ? "Update Task" : "Add Task"}</button>
      </div>

      <hr width="250" />
      <ul>
        {tasks.map((task) => (
          <List
            key={task._id} 
            id={task._id}
            task={task.task}
            setUpdateUI={setUpdateUI}
            updateMode={updateMode}
          />
        ))}
      </ul>
    </main>
  );
};

export default App;
