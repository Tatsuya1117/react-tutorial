import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//以下はアプリパフォーマンスを測定したい場合に設定するやつ 
import reportWebVitals from './pages/reportWebVitals';
reportWebVitals();

// Reactチュートリアル ( https://ja.reactjs.org/tutorial/tutorial.html )

class Square extends React.Component {
  // Squareコンポーネントに自身がクリックされたことを覚えさせるstateを使う
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

    render() {

      // return の前であればメンバ変数として変数を定義できる
      const square__class__name = 'square'

      return (
        <button 
          className={square__class__name} /* こんな感じで{}を使ってタグ内に記述ができる */
          onClick={() => this.setState({value: 'X'})}
        >
          {this.state.value}
        </button>
      );
    }
  }
  
  class Board extends React.Component {
    constructor (props) {
      super(props);
      this.state = { 
      square: Array(9).fill(null),
      };
    }

    renderSquare(i) {
      return ( 
      <Square 
        value={this.state.square[i]}
        onClick = {() => this.handleClick(i)}
      />
      );
    }
  
    render() {
      const status = 'Next player: X';
  
      return (
        <div>
          <div className="status">{status}</div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(
  <React.StrictMode>
    <Game />
  </React.StrictMode>
  );
  