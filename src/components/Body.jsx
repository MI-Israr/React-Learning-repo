import React from "react";

const Body = ({ person }) => {
  return (
    <div>
      <p>{person.name}</p>
      <p>{person.rollNo}</p>
      <p>{person.section}</p>
      <p>{person.emoji}</p>
    </div>
  );
};

export default Body;
