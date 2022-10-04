import "./App.css";
import { useState, useEffect } from "react";
// import { connect, Provider } from "react-redux";
// import { createStore } from "react-redux";
function App() {
  return (
    <div className="App">
      <Board></Board>
    </div>
  );
}

function Board() {
  const [marks, setMarks] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [player, setPlayer] = useState(1);
  const [winclr, setWinclr] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0]);
  // const [winclr1, setWinclr1] = useState("");
  // const [winclr2, setWinclr2] = useState("");
  // const [winclr3, setWinclr3] = useState("");
  // const [winclr4, setWinclr4] = useState("");
  // const [winclr5, setWinclr5] = useState("");
  // const [winclr6, setWinclr6] = useState("");
  // const [winclr7, setWinclr7] = useState("");
  // const [winclr8, setWinclr8] = useState("");

  useEffect(() => {
    const combinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let c of combinations) {
      let win = winclr;
      if (marks[c[0]] === 1 && marks[c[1]] === 1 && marks[c[2]] === 1) {
        console.log("Player 1 win");
        // console.log("winclr" + c[0]);
        let win = winclr;
        win[c[0]] = "gold";
        win[c[1]] = "gold";
        win[c[2]] = "gold";
        setWinclr(win);
        // "setWinclr" + c[0]("gold");
      }

      if (marks[c[0]] === 2 && marks[c[1]] === 2 && marks[c[2]] === 2) {
        console.log("Player 2 win");
        let win = winclr;
        win[c[0]] = "gold";
        win[c[1]] = "gold";
        win[c[2]] = "gold";
        setWinclr(win);
      }
    }
  }, [marks, winclr]);

  const changeMark = (i) => {
    console.log(i);
    const m = [...marks];
    if (m[i] === 0) {
      m[i] = player;
      setMarks(m);
      setPlayer(player === 1 ? 2 : 1);
    } else {
      alert("Please Click on empty Blocks");
    }
  };
  function Block({ mark, position }) {
    console.log(winclr);
    return (
      <div
        className={`Block mark${mark} ${winclr[position]}`}
        onClick={() => changeMark(position)}
      ></div>
    );
  }
  return (
    <div className="Board">
      <div>
        {/*mark={marks[0]} : class ko change kry g  */}
        {/* position={0} : position btaye ga changeMark method ko, k kahan click hua  */}
        <Block
          className={winclr[0]}
          mark={marks[0]}
          position={0}
          changeMark={changeMark}
        ></Block>
        <Block
          className={winclr[1]}
          mark={marks[1]}
          position={1}
          changeMark={changeMark}
        ></Block>
        <Block
          className={winclr[2]}
          mark={marks[2]}
          position={2}
          changeMark={changeMark}
        ></Block>
      </div>
      <div>
        <Block
          className={winclr[3]}
          mark={marks[3]}
          position={3}
          changeMark={changeMark}
        ></Block>
        <Block
          className={winclr[4]}
          mark={marks[4]}
          position={4}
          changeMark={changeMark}
        ></Block>
        <Block
          className={winclr[5]}
          mark={marks[5]}
          position={5}
          changeMark={changeMark}
        ></Block>
      </div>
      <div>
        <Block
          className={winclr[6]}
          mark={marks[6]}
          position={6}
          changeMark={changeMark}
        ></Block>
        <Block
          className={winclr[7]}
          mark={marks[7]}
          position={7}
          changeMark={changeMark}
        ></Block>
        <Block
          className={winclr[8]}
          mark={marks[8]}
          position={8}
          changeMark={changeMark}
        ></Block>
      </div>
    </div>
  );
}

export default App;

// Youtube tutorial: https://www.youtube.com/watch?v=POQ_jzkwfSw
