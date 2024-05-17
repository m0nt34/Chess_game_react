import React from "react";
import style from "./Board.module.css";
import Files from './bits/Files'
import Ranks from './bits/Ranks'
import Pieces from "./pieces/Pieces";

const Board = () => {
  const ranks = Array(8)
    .fill()
    .map((x, i) => 8 - i);
  const files = Array(8)
    .fill()
    .map((x, i) => i+1);
  const getClassName = (i, j) => {
    return (i + j) % 2 === 1 ? style.blackTl : style.whiteTl;
  };
  return (
    <div className={style.board}>
      <Pieces/>
      <Ranks ranks={ranks}/>
      <div className={style.tiles}>
        {ranks.map((rk, i) => {
          return files.map((fl, j) => {
            return (
              <div key={i + " " + j} className={getClassName(i, j)}>
            
              </div>
            );
          });
        })}
      </div>
      <Files files={files}/>
    </div>
  );
};

export default Board;
