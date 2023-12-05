import { useState } from "react";
import { CHESS_BOARD } from "../game/board";
import { makeMove } from "../game/move";

const chessBoardBlock = ({
  color,
  path,
  ID,
  x,
  y,
  peice,
  selected,
  setSelected,
  setChessBoard,
}) => {
  const handleClick = (x, y, peice, target) => {
    // console.log(peice);
    if (!peice.trim()) {
      if (selected) {
        const [old_x, old_y, old_peice] = selected.id.split(",");
        console.log(selected);
        CHESS_BOARD[Number(old_x)][Number(old_y)] = " ";
        makeMove(old_peice.trim(), x, y);
        setChessBoard(CHESS_BOARD);
      }
    }
    if (selected) {
      selected.style.backgroundColor = "";
    }
    target.style.backgroundColor = "gold";
    setSelected(target);
  };
  return (
    <article
      className={`boardBlock w-[90px] h-[90px] ${
        color ? "bg-teal-400" : "bg-white"
      } grid place-content-center`}
      id={ID}
      onClick={(e) => handleClick(x, y, peice, e.currentTarget)}
    >
      {path ? (
        <img className="hover:cursor-pointer" src={path} alt={"image"} />
      ) : (
        ""
      )}
    </article>
  );
};

export default chessBoardBlock;
