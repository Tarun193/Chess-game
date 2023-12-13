import { useState } from "react";
import ChessBoardBlock from "./chessBoardBlock.jsx";
import { Chess } from "chess.js";

const ChessBoard = () => {
  const [game, setGame] = useState(new Chess());
  const [chess_board, setChessBoard] = useState(game.board());
  const [selected, setSelected] = useState("");

  const handleClick = (peice, target, x, y) => {
    game
      .moves({ square: selected.square })
      .includes(String.fromCharCode(97 + y) + (8 - x));
    if (
      peice &&
      selected &&
      game
        .moves({ square: selected.square })
        .includes(String.fromCharCode(97 + y) + (8 - x))
    ) {
      console.log(selected.square);
    } else if (peice) {
      setSelected(peice);
      console.log(peice);
    } else {
      const move =
        (selected.type === "p" ? "" : selected.type.toUpperCase()) +
        String.fromCharCode(97 + y) +
        (8 - x);
      console.log(
        game.moves({ square: selected.square }),
        selected.square,
        game.board()
      );
      if (selected && game.moves({ square: selected.square }).includes(move)) {
        game.move(move);
        setGame(game);
      } else {
        console.log("invalid Move");
      }
    }
    setChessBoard(game.board());
  };

  return (
    <article className="ml-10 border-2 border-white w-fit my-2">
      {chess_board.map((row, i) => (
        <section key={i} className="flex">
          {row.map((peice, j) => {
            return (
              <ChessBoardBlock
                key={j}
                color={(i + j) % 2}
                path={peice ? peice.color + peice.type : ""}
                x={i}
                y={j}
                peice={peice}
                handleClick={handleClick}
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
