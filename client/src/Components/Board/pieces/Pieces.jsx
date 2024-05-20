import React, { useRef, useState } from "react";
import style from "./Pieces.module.css";
import Piece from "./piece/Piece";
import { CreatePositions ,copyPosition} from "./CreatePosition";
const Pieces = () => {
  const [Positions, UsePositions] = useState(CreatePositions());
  const ref = useRef(null);

  const calculateCoords = (e) =>{
    const { width, left, top } = ref.current.getBoundingClientRect();
    console.log(e.dataTransfer.getData("text"));
    const size = width / 8;
    const y = 7-Math.floor((e.clientX - left)/size)
    const x = 7- Math.floor((e.clientY - top)/size)
    return {x,y}
  }
  const onDrop = (e) => {
    const newPosition = copyPosition(Positions)
    const {x,y} = calculateCoords(e)
    const [p, rank, file] = e.dataTransfer.getData("text").split(",");
    newPosition[rank][file] = ''
    newPosition[x][y] = p
    UsePositions(newPosition)
  };
  const onDragOver = (e) => {
    e.preventDefault();
  };
  return (
    <div
      className={style.pieces}
      onDrop={onDrop}
      onDragOver={onDragOver}
      ref={ref}
    >
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
