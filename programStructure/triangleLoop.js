function triangle(size) {
  for (let i = 1; i <= size; i++) {
    let hash = "";
    while (hash.length < i) {
      hash += "#";
    }
    console.log(hash);
  }
}

triangle(7);