import React, { Component } from "react";
// import { nanoid } from "nanoid"; // 类似uuid的 生成随机id
import axios from "axios";
import "./App.css";

export default class App extends Component {
  getStudentData = () => {
    let url = "http://localhost:3000/api1/students";
    axios.get(url).then(
      (responese) => {
        console.log(responese.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  getCarData = () => {
    let url = "http://localhost:3000/api2/cars";
    axios.get(url).then(
      (responese) => {
        console.log(responese.data);
      },
      (error) => {
        console.log(error);
      }
    );
  };
  render() {
    return (
      <div>
        <button onClick={this.getStudentData}>获取学生数据</button>
        <button onClick={this.getCarData}>获取汽车数据</button>
      </div>
    );
  }
}
