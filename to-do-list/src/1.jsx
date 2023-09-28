import React, { useState } from "react";

let Elements = () => {
  const [toDos, setTodos] = React.useState([]);
  const [toDo, setTodo] = React.useState("");
  const [completedTodos, setCompletedTodos] = React.useState([]);

  const handleAddTodo = () => {
    if (toDo.trim() !== "") {
      setTodos([...toDos, { id: Date.now(), text: toDo, status: false }]);
      setTodo(""); 
    }
  };

  const handleDeleteTodo = (id) => {
    const updatedTodos = toDos.filter((obj) => obj.id !== id);
    setTodos(updatedTodos);
  };

  const handleToggleStatus = (id, status) => {
    const updatedTodos = toDos.map((obj) => {
      if (obj.id === id) {
        obj.status = !status;
      }
      return obj;
    });
    setTodos(updatedTodos);
  };

  React.useEffect(() => {
    const completed = toDos.filter((obj) => obj.status);
    setCompletedTodos(completed);
  }, [toDos]);

  return (
    <div className="app">
      <div className="mainHeading">
        <h1 className="ha">ToDo List</h1>
      </div>

      <div className="input">
        <input
          value={toDo}
          onChange={(e) => setTodo(e.target.value)}
          type="text"
          placeholder="Add-items"
        />
        <i onClick={handleAddTodo} className="fas fa-plus"></i>
      </div>

      <div className="todos">
        {toDos.map((obj) => {
          return (
            <div className="todo" key={obj.id}>
              <div className="left">
                <input
                  onChange={() => handleToggleStatus(obj.id, obj.status)}
                  checked={obj.status}
                  type="checkbox"
                  name=""
                  id=""
                />
                <p>{obj.text}</p>
              </div>

              <div className="right">
                <i
                  onClick={() => handleDeleteTodo(obj.id)}
                  className="fas fa-times"
                ></i>
              </div>
            </div>
          );
        })}
      </div>

      <div className="activity-log">
        <h2 className="h">Completed-List</h2>
        <div className="completed-todos">
          {completedTodos.map((obj) => (
            <div key={obj.id} className="completed-todo">
              <p>{obj.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Elements;
