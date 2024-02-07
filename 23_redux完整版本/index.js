// 引入React核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 引入App组件
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
// 渲染到页面
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 需要放在最外层 整个App需要用一个路由器去管理
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// 全部更新

store.subscribe(() => {
  root.render(
    // 需要放在最外层 整个App需要用一个路由器去管理
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
