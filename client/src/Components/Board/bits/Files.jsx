import React from "react";
import style from "../Board.module.css";
import { UseToChar } from "../../../hooks/UseToChar";
const Files = ({ files }) => {
  return (
    <div className={style.files}>
      {files.map((fl, i) => {
        return (
          <span
            key={i}
            style={{
              color: i % 2 === 0 ? "var(--light-tile)" : "var(--dark-tile)",
            }}
          >
            {UseToChar(fl)}
          </span>
        );
      })}
    </div>
  );
};

export default Files;
