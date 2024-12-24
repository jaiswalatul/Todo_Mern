import React from "react";
import "./Todo.css";
import { useState } from "react";
import Todo_cards from "./Todo_cards";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Update from "./Update";
import axios from "axios";
import { useEffect } from "react";

let id = sessionStorage.getItem("id");
let toUpdateArray = [];

const Todo = () => {
  const show = () => {
    document.getElementById("text_area").style.display = "block";
  };

  const [input, setInput] = useState({ title: "", body: "" });

  const [array, setArray] = useState([]);

  const change = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const update = (value) => {
    //console.log(array);
     toUpdateArray = array[value];
    // console.log(toUpdateArray);
  };

  const submit = async () => {
    if (input.title === "" || input.body === "") {
      console.log(id)
      toast.error("Title or body Should not be Empty");
    } else {
      console.log(id);

      if (id) {
        console.log("hey");
        await axios
          .post(`http://localhost:1000/api/v2/addTask`, {
            title: input.title,
            body: input.body,
            id: id,
          })
          .then((res) => {
            console.log(res);
          });
        // setArray([...array, input]);
        setInput({ title: "", body: "" });

        toast.success("Your task  is Added");
      } else {
        console.log("no",id);
        setArray([...array, input]);
        setInput({ title: "", body: "" });
        toast.success("Your task  is Added");
        toast.error("Your task is Not saved ! Please Sigup");
      }

      // setArray([...array, input]);
      // setInput({ title: "", body: "" });
      // toast.success("Your task  is Added")
      // toast.error("Your task is Not saved ! Please Sigup")
    }
  };

  const del = async (CardId) => {
    if (id) {
      await axios
        .delete(`http://localhost:1000/api/v2/deleteTask/${CardId}`, {
          data: { id: id },
        })
        .then((resp) => {
          console.log(resp);
          toast.success("Your Task is Deleted");
        });
    } else {
      toast.error("Please Signup First");
    }

    // array.splice(id, "1");
    // // 1 mtlb sirf isi id ko delete karn ahin
    // setArray([...array]);
  };

  const dis = (value) => {
    console.log(value);
    document.getElementById("todo_update").style.display = value;
  };

  useEffect(() => {
    const fetch = async () => {
      if (id) {
        console.log("get the task");
        await axios
          .get(`http://localhost:1000/api/v2/getTask/${id}`)
          .then((resp) => {
            //console.log(resp.data);
            setArray(resp.data.list);
          });
      }
    };
    fetch();
  }, [submit]);


  // Update Function
 

  return (
    <div className="todo">
      <ToastContainer />
      <div className="todo_main container d-flex justify-content-center align-items-center flex-column">
        <div className="d-flex flex-column todo_inputs_div p-1 w-100">
          <input
            type="text"
            placeholder="Title"
            className="my-2 p-2 todo_inputs"
            onClick={show}
            name="title"
            value={input.title}
            onChange={change}
          />
          <textarea
            id="text_area"
            type="text"
            placeholder="BODY"
            name="body"
            value={input.body}
            onChange={change}
            className="p-2 todo_inputs"
          />
        </div>

        <div className="w-lg-50 w-100 d-flex justify-content-end my-3">
          <button className="home_btn px-2 py-1 fonta" onClick={submit}>
            Add
          </button>
        </div>
      </div>

      <div className="todo_body">
        <div className="container-fluid">
          <div className="row">
            {array &&
              array.map((item, index) => (
                <div className="col-lg-3 col-11 mx-lg-5 mx-3 mx-5 my-2" key={index}>
                  <Todo_cards
                    title={item.title}
                    body={item.body}
                    id={item._id}
                    delid={del}
                    display={dis}
                    updateId={index}
                    tobeUpdate={update}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      <div className="todo_update" id="todo_update">
        <div className="container">
          <Update display={dis} toUpdateArray={toUpdateArray} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
