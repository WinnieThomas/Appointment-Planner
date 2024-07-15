import React from "react";

export const Tile = (props) => {
  const tileEls = Object.values(props.value);
  return (
    <div className="tile-container">
     {tileEls.map((tileEl,index)=>(
       <p className="tile" key={index}>{tileEl}</p>
     ))}
     
    </div>
  );
};
