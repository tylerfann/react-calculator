import React from "react";
import { Row } from "../Row/Row";

export const NumberPad = (props) => {
  return (
    <div>
      {props.numPad.map((el, index) => {
        return (
          <Row onPress={props.onPress} content={el} key={"row " + index} />
        );
      })}
    </div>
  );
};
