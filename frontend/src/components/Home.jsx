import React from "react";
import "./Home.css";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const history=useNavigate();

  const gotoTodo=()=>{
     history('/todo');
  }
  
  return (
    <div className="home">
      <div className="container d-flex justify-content-center align-items-center flex-column ">
        <h1 className="text-center">
          Organize Your Work
          <br />
          Work and life,finally.
        </h1>
        <p>
          Become focused, organized, and calm with <br /> todo app. The World's
          #1 task manager app
        </p>

        <button className="home_btn p-2" onClick={gotoTodo} >
          Make Todo List
          </button>
      </div>
    </div>
  );
};

export default Home;
