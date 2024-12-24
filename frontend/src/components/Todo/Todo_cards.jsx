import React from "react";
import "./Todo.css";
import { MdDelete } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";

const Todo_cards = ({ title, body, id, delid, display, updateId,tobeUpdate }) => {
  // id is index of task element
  return (
    <div className="p-3 todo_cards">
      <div>
        <h5>{title}</h5>
        <p className="todo_card_p">{body.split("", 77)}</p>
      </div>

      <div className="d-flex justify-content-around ">
        <div
          className="d-flex justify-content-center align-items-center card_icon_head px-2 py-1"
          onClick={() => {display("block")
            console.log(updateId)
            tobeUpdate(updateId)
          }
          }
          
        >
          <GrDocumentUpdate className="card-icons" /> Update
        </div>

        <div
          className="d-flex justify-content-center align-items-center  card_icon_head px-2 py-1 text-danger"
          onClick={() => delid(id)}
        >
          <MdDelete className="card_icons del" /> Delete
        </div>
      </div>
    </div>
  );
};

export default Todo_cards;
