import React from "react";
import "./styles/Card.css";

const Card = ({ taskObj, index, imageUrl, deleteTask }) => {

  const handleDelete = () => {
    deleteTask(index)
  }

  return (
    <>
      <div className="cards">

        <div className="card-container">
          <div className="image-container">
            {/* <img src={taskObj.Image} key={index} id="image" alt="Uploaded" /> */}
            <img src="#" key={index} id="image" alt="Uploaded" />
            {console.log(taskObj.Image)}
          </div>

          <div className="card-content">
            <div className="card-title">
              <h3>{taskObj.Name}</h3>
            </div>

            <div className="card-body">
              {taskObj.Description}
            </div>
          </div>
          <div className="btnBox">
            <button className="btn-Card">
              Edit
            </button >
            <button className="btn-Card" onClick={() => handleDelete(index)}>
              Delete
            </button>
          </div>


        </div>
      </div>

    </>
  );
};

export default Card;