// ---
// import ChessBoardBlock from "./chessBoardBlock.astro";
// import {CHESS_BOARD} from "../game/board";
// import { makeMove } from "../game/move";
// ---

import { useEffect, useState } from "react";
import { CHESS_BOARD } from "../game/board";
import ChessBoardBlock from "./chessBoardBlock.jsx";

const ChessBoard = () => {
  const [chess_board, setChessBoard] = useState(CHESS_BOARD);
  const [selected, setSelected] = useState("");
  return (
    <article className="ml-10 border-2 border-white w-fit my-2">
      {chess_board.map((row, i) => (
        <section key={i} className="flex">
          {row.map((peice, j) => {
            return (
              <ChessBoardBlock
                key={j}
                color={(i + j) % 2}
                path={peice !== " " ? `../assets/images/${peice}.png` : ""}
                x={i}
                y={j}
                peice={peice}
                selected={selected}
                setSelected={setSelected}
                setChessBoard={setChessBoard}
                ID={`${i}, ${j}, ${peice}`}
              />
            );
          })}
        </section>
      ))}
    </article>
  );
};

export default ChessBoard;

//   <!-- JavaScript for the Board Logic -->
//   <script>import { CHESS_BOARD } from "../game/board";
// import { makeMove } from "../game/move";

//     let selected = null;

//     const blocks = document.querySelectorAll(".boardBlock");
//     blocks.forEach((block) => block.addEventListener('click', (e) => {
//       const [x, y, peice] = block.id.split(",");
//       console.log(x, y, peice);

//       if(selected) {
//         selected.style.backgroundColor = "";
//         selected.classList.add("selected");
//       }

//       if(!peice.trim() && selected){
//         const [old_x, old_y, peice] = selected.id.split(" ");
//         makeMove(peice, Number(x), Number(y));
//         console.log(CHESS_BOARD);

//       }

//       block.classList.add("selected");
//       block.style.backgroundColor = "gold";
//       selected = block;
//     }))
//   </script>
