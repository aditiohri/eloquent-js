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