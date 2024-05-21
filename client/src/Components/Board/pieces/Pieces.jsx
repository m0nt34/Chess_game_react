import React, { useRef, useState } from "react";
import style from "./Pieces.module.css";
import Piece from "./piece/Piece";
import { CreatePositions, copyPosition } from "./CreatePosition";
import { useAppContext } from "../../../Contexts/Context";
const Pieces = () => {
  const ref = useRef(null);

  const { appState, dispatch } = useAppContext();

  const currentPosition = appState.Position;

  const calculateCoords = (e) => {
    const { width, left, top } = ref.current.getBoundingClientRect();
    console.log(e.dataTransfer.getData("text"));
    const size = width / 8;
    const y = 7 - Math.floor((e.clientX - left) / size);
    const x = 7 - Math.floor((e.clientY - top) / size);
    return { x, y };
  };
  const onDrop = (e) => {
    const newPosition = copyPosition(currentPosition);
    const { x, y } = calculateCoords(e);
    const [p, rank, file] = e.dataTransfer.getData("text").split(",");
    newPosition[rank][file] = "";
    newPosition[x][y] = p;
    dispatch(make)
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
      {currentPosition.map((r, rank) => {
        return r.map((f, file) => {
          return currentPosition[rank][file] ? (
            <Piece
              key={rank + "-" + file}
              rank={rank}
              file={file}
              piece={currentPosition[rank][file]}
            />
          ) : null;
        });
      })}
    </div>
  );
};

export default Pieces;
