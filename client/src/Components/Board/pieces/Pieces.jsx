import React, { useState } from "react";
import style from "./Pieces.module.css";
import Piece from "./piece/Piece";
import { CreatePositions } from "./CreatePosition";
const Pieces = () => {
  const [Positions,UsePositions] = useState(CreatePositions())
  console.log(Positions)
  const onDrop = e =>{
    console.log(e.dataTransfer.getData('text'))
  }
  const onDragOver = e =>{
    e.preventDefault()

  }
  return (
    <div className={style.pieces} onDrop={onDrop} onDragOver={onDragOver}>
      {Positions.map((r, rank) => {
        return r.map((f, file) => {
          return Positions[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={Positions[rank][file]}
            />
          ) : null;
        });
      })}
    </div>
  );
};

export default Pieces;
