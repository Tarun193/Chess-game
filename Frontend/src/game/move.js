
import { CHESS_BOARD } from "./board"

export const makeMove = (peice, x, y) => {
    console.log("test", CHESS_BOARD);
    CHESS_BOARD[x][y] = peice;
}