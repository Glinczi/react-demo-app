// 入口文件
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// 用于检测页面性能的
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
// React.StrictMode 用于检测包裹的组件内部书写规范的问题
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
