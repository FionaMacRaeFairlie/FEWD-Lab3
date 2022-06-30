import React from "react";

const FoodItem = ({ food }) => {
  return (
    <div className="card" style={{width: 50+"%;"}}>
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">£{food.price}</h6>
        <p className="card-text">{food.description}</p>
      </div>
    </div>
  );
};
export default FoodItem;
