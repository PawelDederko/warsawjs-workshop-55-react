import { PureComponent } from "react";

import Game from "mykulyak-2048";

import './App.css';
import Header from "./Header";

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.game = new Game(4, 1);
    this.game.slide(2);
    this.state = {
      score: 0,
      board: this.game.boardData(),
    };
  }

  handleReset = () => {
    this.game.reset();
    this.game.slide(2);
    this.setState({
      score: 0,
      board: this.game.boardData(),
    });
  }

  handleKeyUp = (event) => {
    const directionMap = {
      ArrowLeft: 8,
      ArrowRight: 4,
      ArrowUp: 1,
      ArrowDown: 2,
    };
    this.game.slide(directionMap[event.key]);
    this.setState({
      score: this.game.score,
      board: this.game.boardData(),
    })
  }

  componentDidMount() {
    document.addEventListener("keyup", this.handleKeyUp);
  }

  componentWillUnmount() {
    document.removeEventListener("keyup", this.handleKeyUp);
  }

  render() {
    const { score, board } = this.state;
    
    return (
      <div className="app">
        <Header score={score} />
        <div className="commands">
          <button className="command-button" onClick={this.handleReset}>New game</button>
        </div>
        <main className="board">
          {board.map((value, index) => (
            <div key={index} className="board-cell">
              <div className={`board-cell-content cell-${value}`}>
                {value > 0 ? value : null}
              </div>
            </div>
          ))}
        </main>
      </div>
    );
  }
}