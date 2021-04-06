import React from "react";

const Card = (props) => {
  const {
    status,
    eta,
    location_name,
    sender,
    user_name,
    user_phone,
  } = props.data;

  console.log("CARDS", props.data);
  //Reading Cards Check

  return (
    <article className="card">
      <div>
        <h1>Order Status: {status}</h1>
        <p>Custmer Name: {user_name}</p>
        <p>Pickup Location: {location_name}</p>
        <p>Sender Name: {sender}</p>
        <p>Estimated Delivery Time: {eta}</p>
        <p>Contact Number: {user_phone}</p>
      </div>
    </article>
  );
};
export default Card;
