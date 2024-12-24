import React, { useState, useEffect } from "react";
import "./Todo.css";
import axios from "axios";

const Update = ({ display, toUpdateArray }) => {
  const [input, setInput] = useState({
    title: "",
    body: "",
  });
  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  useEffect(() => {
    setInput({
      title: toUpdateArray.title,
      body: toUpdateArray.body,
    });
  }, [toUpdateArray]);

  const submit = async () => {
    console.log("inside submit")
    await axios
      .put(`http://localhost:1000/api/v2/updateTask/${toUpdateArray._id}`, input)
      .then((resp) => {
        //console.log(resp);
        //toast.success("Task Updated")
      });
    display("none");
    //console.log(input);
  };

  return (
    <div className="p-5 d-flex justify-content-center align-items-start  flex-column update">
      <h3>Update Your Task</h3>
      <input
        type="text"
        className="todo_inputs my-4 w-100 p-3"
        value={input.title}
        onChange={change}
        name="title"
      />
      <textarea
        className="todo_inputs w-100 p-3"
        value={input.body}
        onChange={change}
        name="body"
      ></textarea>
      <div>
        <button className="btn btn-dark my-4" onClick={submit}>
          Update
        </button>
        <button
          className="btn btn-danger my-4 mx-3"
          onClick={() => display("none")}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Update;
