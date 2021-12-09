import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodos } from "../js/reducer";


const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
  };
};  

const AddTask = (props) => {
  const [todo, setTodo] = useState("");

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <div className="wrapper">
      <div className='input-data'>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          className="todo-input"
          value={todo}
        />
        <button className="add-btn" onClick={() => add()}>Add</button>
        <br />

      </div>
    
    </div>
  );
};
export default connect (mapStateToProps, mapDispatchToProps)(AddTask);