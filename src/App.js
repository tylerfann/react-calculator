import React, { Component } from "react";
import "./App.css";
import { Display } from "./components/Display/Display";
import { NumberPad } from "./components/NumberPad/NumberPad";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.numPad = [
      ["AC", "+/-", "%", "/"],
      ["7", "8", "9", "*"],
      ["4", "5", "6", "-"],
      ["1", "2", "3", "+"],
      ["0", ".", "="],
    ];
    this.state = {
      display: "0",
      numString: "",
      newNumString: "",
      operator: undefined,
      firstNum: undefined,
    };
  }

  setNumString = (text) => {
    const newNumString = this.state.numString + text;
    this.setState({ numString: newNumString }, () => {
      this.setState({ display: this.state.numString });
    });
  };

  doMath = (answer) => {
    this.setState({
      display: answer,
      operator: undefined,
      firstNum: undefined,
      newNumString: "",
      numString: "",
    });
  };

  updateDisplay = (text) => {
    if (!isNaN(text)) {
      if (this.state.operator) {
        const newNumString = this.state.newNumString + text;
        this.setState({ newNumString }, () => {
          this.setState({ display: this.state.newNumString });
        });
      } else {
        if (
          (text === "0" && parseFloat(this.state.display) > 0) ||
          (this.state.display.length && this.state.display.includes("."))
        ) {
          this.setNumString(text);
        } else if (text !== "0") {
          this.setNumString(text);
        }
      }
    } else if (text === "AC") {
      this.setState({ display: "0", numString: "" });
    } else if (text === ".") {
      if (!this.state.numString.includes(".")) {
        if (this.state.display === "0") {
          this.setNumString("0" + text);
        } else {
          this.setNumString(text);
        }
      }
    } else if (/[+*-/]/g.test(text)) {
      if (this.state.operator) {
        const firstNum = parseInt(this.state.firstNum);
        const secondNum = parseInt(this.state.newNumString);
        if (firstNum && secondNum) {
          if (this.state.operator === "+") {
            const answer = firstNum + secondNum;
            this.doMath(answer);
          } else if (this.state.operator === "*") {
            const answer = firstNum * secondNum;
            this.doMath(answer);
          } else if (this.state.operator === "-") {
            const answer = firstNum - secondNum;
            this.doMath(answer);
          } else if (this.state.operator === "/") {
            const answer = firstNum / secondNum;
            this.doMath(answer);
          }
        console.log(this.state)

        }
      } else {
        this.setState({ operator: text, firstNum: this.state.display });
      }
    } else if (text === "=") {
      const firstNum = parseInt(this.state.firstNum);
      const secondNum = parseInt(this.state.newNumString);
      if (firstNum && secondNum) {
        if (this.state.operator === "+") {
          const answer = firstNum + secondNum;
          this.doMath(answer);
        } else if (this.state.operator === "*") {
          const answer = firstNum * secondNum;
          this.doMath(answer);
        } else if (this.state.operator === "-") {
          const answer = firstNum - secondNum;
          this.doMath(answer);
        } else if (this.state.operator === "/") {
          const answer = firstNum / secondNum;
          this.doMath(answer);
        }
      }
    }
  };

  render() {
    return (
      <div className="app">
        <div className="calc-wrapper">
          <Display text={this.state.display} />
          <NumberPad onPress={this.updateDisplay} numPad={this.numPad} />
        </div>
      </div>
    );
  }
}
