const createMap = (columns, lines, colors) =>
  Array.from({ length: columns }).map((v, l) =>
    Array.from({ length: lines }).map((x, c) => ({
      color: colors[Math.floor(Math.random() * colors.length)],
      origin: l + c == 0
    }))
  );

const setOrigin = (map, color) => {
  let square = [...map];

  const get = (l, c) => {
    try {
      return square[l][c] || {};
    } catch (e) {
      return false;
    }
  };

  const treeSearch = (l, c) => {
    if (square[l][c].color === color) {
      square[l][c].origin = true;
    }

    if (square[l][c].origin) {
      square[l][c].color = color;
    }

    if ((get(l + 1, c).color === color) ^ get(l + 1, c).origin) {
      treeSearch(l + 1, c);
    }

    if ((get(l, c + 1).color === color) ^ get(l, c + 1).origin) {
      treeSearch(l, c + 1);
    }

    if ((get(l - 1, c).color === color) ^ get(l - 1, c).origin) {
      treeSearch(l - 1, c);
    }

    if ((get(l, c - 1).color === color) ^ get(l, c - 1).origin) {
      treeSearch(l, c - 1);
    }
  };

  treeSearch(0, 0);

  return square;
};

export { createMap, setOrigin };
