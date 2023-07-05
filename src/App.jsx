import React, { Component, useState } from "react";
import { nanoid } from "nanoid"; // 类似uuid的 生成随机id
import "./App.css";

// 创建外壳组件
// export default class App extends Component {
//   state = {
//     line: [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//     ],
//   };
//   render() {
//     return (
//       <div className="game_area">
//         <div className="grid-top">X</div>
//         <div className="grid-top"></div>
//         <div className="grid-top">O</div>
//         <div className="grid-middle"></div>
//         <div className="grid-middle"></div>
//         <div className="grid-middle"></div>
//         <div className="grid-bottom"></div>
//         <div className="grid-bottom"></div>
//         <div className="grid-bottom"></div>
//       </div>
//     );
//   }
// }

export default function App() {
  const [symbol, setSymbol] = useState("X");
  const [symbolList, setSymbolList] = useState(Array(9).fill(null));

  /**
   * 设置symbol
   */
  const writeSymbol = (event) => {
    console.dir(event);
    let node = event.target;
    let index = node.dataset.index;
    node.innerText = symbol;
    symbolList[index] = symbol;
    if (whoIsWinner) {
      alert(symbol + "is Winner");
      return;
    } else {
      setSymbolList(symbolList);
      if (symbol === "X") setSymbol("O");
      if (symbol === "O") setSymbol("X");
    }
  };
  /**
   * 判断输赢
   */
  const whoIsWinner = () => {
    let line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    let res = line.some((item) => {
      return (
        (symbolList[item[0]] && symbolList[item[0]]) === symbolList[item[1]] &&
        (symbolList[item[0]] && symbolList[item[0]]) === symbolList[item[2]]
      );
    });
    return res;
  };

  return (
    <div className="game_area">
      <div onClick={writeSymbol} className="grid-top" data-index="0"></div>
      <div onClick={writeSymbol} className="grid-top" data-index="1"></div>
      <div onClick={writeSymbol} className="grid-top" data-index="2"></div>
      <div onClick={writeSymbol} className="grid-middle" data-index="3"></div>
      <div onClick={writeSymbol} className="grid-middle" data-index="4"></div>
      <div onClick={writeSymbol} className="grid-middle" data-index="5"></div>
      <div onClick={writeSymbol} className="grid-bottom" data-index="6"></div>
      <div onClick={writeSymbol} className="grid-bottom" data-index="7"></div>
      <div onClick={writeSymbol} className="grid-bottom" data-index="8"></div>
    </div>
  );
}
