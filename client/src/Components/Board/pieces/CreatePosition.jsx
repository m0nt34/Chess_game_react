export const CreatePositions = () => {
  const position = new Array(8).fill("").map((x) => new Array(8).fill(""));

  for (let i = 0; i < 8; i++) {
    position[1][i] = "wp";
    position[6][i] = "bp";
  }
  position[0][0] = "wr";
  position[0][7] = "wr";
  position[0][1] = "wn";
  position[0][6] = "wn";
  position[0][2] = "wb";
  position[0][5] = "wb";
  position[0][3] = "wk";
  position[0][4] = "wq";

  position[7][0] = "br";
  position[7][7] = "br";
  position[7][1] = "bn";
  position[7][6] = "bn";
  position[7][2] = "bb";
  position[7][5] = "bb";
  position[7][3] = "bk";
  position[7][4] = "bq";

  return position;
};
