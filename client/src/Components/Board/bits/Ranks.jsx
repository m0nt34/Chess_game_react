import React from "react";
import style from "../Board.module.css";
const Ranks = ({ ranks }) => {
  return (
    <div className={style.ranks}>
      {ranks.map((rk, i) => {
        return (
          <span
            key={i}
            style={{
              color: i % 2 === 1 ? "var(--light-tile)" : "var(--dark-tile)",
            }}
          >
            {rk}
          </span>
        );
      })}
    </div>
  );
};

export default Ranks;
