> A basic tile game 

### About the game

The player is given an n x n board of tiles where each tile is given one
of m colors. Each tile is connected to up to four adjacent tiles in the North, South, East,
and West directions. A tile is connected to the origin (the tile in the upper left corner) if
it has the same color as the origin and there is a path to the origin consisting only of tiles
of this color. A player does a move by choosing one of the m colors. After the choice is
made, all tiles that are connected to the origin are changed to the chosen color. The game
proceeds until all tiles of the board have the same color. The goal of the game is to
change all the tiles to the same color, preferably with the fewest number of moves
possible.

### Live preview

[Check here](https://vanderleisilva.github.io/tiles-game/) a live demo and have fun! :)

### technical implementation

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

The main idea here is not too much about the project's structure, but mainly about the game logic implementation.
