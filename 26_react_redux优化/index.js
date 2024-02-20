// 引入React核心库
import React from "react";
// 引入ReactDOM
import ReactDOM from "react-dom/client";
// 引入App组件
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
// 渲染到页面
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // 需要放在最外层 整个App需要用一个路由器去管理
  <BrowserRouter>
    {/* Provider 组件可以精确的找到容器组件 传递store 这样就不需要每个容器组件都写一遍store */}
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);

// 监测store的改变，更新页面 （react-redux 具有检测的能力，不需要再手写检测）
// store.subscribe(() => {
//   root.render(
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   );
// });
