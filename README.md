# React-Minesweeper

A classic Minesweeper game built with React.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Game Rules](#game-rules)
- [Contributing](#contributing)

## Features

- Classic Minesweeper gameplay
- Customizable grid sizes and mine counts
- Responsive design for mobile and desktop
- Timer to track your progress
- Flagging and revealing functionality
- Simple and intuitive UI

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

    ```sh
    git clone https://github.com/Njancodes/React-Minesweeper.git
    cd React-Minesweeper
    ```

2. Install the dependencies:

    ```sh
    npm install
    ```

3. Start the development server:

    ```sh
    npm start
    ```

The app will be available at `http://localhost:3000`.

## Usage

1. **Start a New Game**: Choose your preferred grid size and number of mines.
2. **Revealing a Cell**: Click on a cell to reveal it. If it's a mine, the game is over.
3. **Flagging a Cell**: Right-click on a cell to flag it as a mine. Right-click again to remove the flag.
4. **Winning the Game**: Reveal all cells that are not mines.

## Game Rules

- **Objective**: The objective of the game is to clear a rectangular board containing hidden "mines" without detonating any of them, with help from clues about the number of neighboring mines in each field.
- **Revealing a Cell**: If a player reveals a mine, they lose. Otherwise, the revealed cell will display a number indicating how many mines are adjacent to it. If no mines are adjacent, it will be blank, and the adjacent cells will automatically be revealed.
- **Flagging Mines**: Players can flag cells they suspect contain mines. Flagging is purely for the player's reference and does not affect gameplay mechanics.
- **Winning**: The game is won when all non-mine cells are revealed.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push your branch to your forked repository.
5. Open a pull request detailing your changes.
