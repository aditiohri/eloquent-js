function chessBoard(size) {
  const { even, odd } = buildRows(size);
  for (let i = 1; i < size; i++) {
    if (!isEven(i)) {
      console.log(odd);
    } else {
      console.log(even);
    }
  }
}

const isEven = (num) => (num % 2 === 0 ? true : false);

const buildRows = (size) => {
  let even = "";
  let odd = "";
  for (let i = 1; i <= size; i++) {
    if (!isEven(i)) {
      odd += " ";
      even += "#";
    } else {
      odd += "#";
      even += " ";
    }
  }
  return {
    even,
    odd,
  };
};

chessBoard(8);

/** official answer below */
// let size = 8;
// let board = "";

// for (let y = 0; y < size; y++) {
//     for (let x = 0; x < size; x++) {
//         if ((x + y) % 2 === 0) {
//             board += " "
//         } else {
//             board += "#"
//         }
//     }
//     board += "\n"
// }

// console.log(board)
