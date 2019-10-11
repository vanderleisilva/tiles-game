var colors = ["B", "R", "Y"];

const colorScore = square =>
  colors
    .map(color => ({
      size: square
        .map(l => l.filter(c => c.color === color && !c.origin).length)
        .reduce((total, num) => total + num, 0),
      color
    }))
    .sort((a, b) => a.size - b.size);

const createMap = (columns, lines) =>
  Array.from({ length: columns }).map((v, l) =>
    Array.from({ length: lines }).map((x, c) => ({
      color: colors[Math.floor(Math.random() * colors.length)],
      origin: l + c == 0,
      id: `${l}${c}`
    }))
  );

const setOrigin = (map, color) => {
  let square = [...map];

  const get = (l, c) => {
    try {
      return square[l][c].origin;
    } catch (e) {
      return false;
    }
  };

  const isConnected = (l, c) =>
    get(l + 1, c) || get(l - 1, c) || get(l, c + 1) || get(l, c - 1);

  const status = (l, c) => {
    if (square[l][c].origin) {
      square[l][c].color = color;
      return;
    }

    if (isConnected(l, c) && square[l][c].color === color) {
      square[l][c].origin = true;
    }
  };

  for (let l in square) {
    for (let c in square[l]) {
      status(l, c);
    }
  }

  return square
};

export { createMap, setOrigin }
