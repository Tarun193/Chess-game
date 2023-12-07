
import { CHESS_BOARD } from "./board"

export const makeMove = (peice, x, y, current_x, current_y) => {
    console.log(validateMoves(peice, current_x, current_y), x + ',' + y);
    if (validateMoves(peice, current_x, current_y).includes(x + ',' + y)) {
        CHESS_BOARD[x][y] = peice;
        CHESS_BOARD[current_x][current_y] = "";
    }
    else {
        alert("Invalid Move");
    }
}

const validateMoves = (peice, current_x, current_y) => {
    switch (peice) {
        case 'PB':
        case 'PW':
            return getPawanMoves(peice, current_x, current_y);
            break;

        default:
            break;
    }
}

const getPawanMoves = (peice, current_x, current_y) => {
    if (peice === "PB") {
        if (current_x === 1) {
            return [(current_x + 1) + ',' + current_y, (current_x + 2) + ',' + current_y];
        }
        else {
            return [(current_x + 1) + ',' + current_y]
        }
    }
    else {
        if (current_x === 6) {
            return [(current_x - 1) + ',' + current_y, (current_x - 2) + ',' + current_y];
        }
        else {
            return [(current_x - 1) + ',' + current_y]
        }
    }
}