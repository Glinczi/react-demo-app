/**
 *
 * @param {*} preState 之前的状态
 * @param {*} action  动作对象
 */
export default function countReducer(preState, action) {
  const { type, data } = action;
  switch (type) {
    case "increment":
      return preState + data;

    case "decrement":
      return preState - data;

    default:
      return 0; // 初始化
  }
}

// 纯函数
