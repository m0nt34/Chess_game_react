import React from "react";
import "./Piece.css";
const Piece = ({ rank, file, piece }) => {
  const onDragStart = e =>{
    console.log(e)
    e.dataTransfer.effectAllowed = 'move'
    e.dataTransfer.setData('text/plain',`${piece},${rank},${file}`)
    setTimeout(() => {
      
      e.target.style.display = 'none'
    }, 0);
  }
  const onDragEnd = e =>{
    e.target.style.display = 'block'

  }
  return (
    <div
      style={{
        transform: `translate(${(7 - file) * 100}%,${(7 - rank) * 100}%)`,
      }}
      className={`piece ${piece} p-${file}${rank}`}
      draggable={true}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
    ></div>
  );
};

export default Piece;
