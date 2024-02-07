/**
 * count的容器组件 用于处理UI组件和redux的交互
 * 这里面不要直接引入store
 */
import CountUI from "../components/Count/index";
import { connect } from "react-redux";
import {
  incrementAction,
  decrementAction,
  incrementAsyncAction,
} from "../redux/count_action";

/**
 *
 * @param {*} state store中状态值
 * @returns
 */
const mapStateToProps = (state) => {
  return {
    count: state,
  };
}; // 用于存放store中保存的状态
/**
 *
 * @param {*} dispatch
 * @returns
 */
const mapDispatchToProps = (dispatch) => {
  return {
    increment: (data) => dispatch(incrementAction(data * 1)),
    decrement: (data) => dispatch(decrementAction(data * 1)),
    incrementAsync: (data) => dispatch(incrementAsyncAction(data * 1)),
  };
}; // 用于存放redux中操作状态的方法

export default connect(mapStateToProps, mapDispatchToProps)(CountUI);
