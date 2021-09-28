import React from "react";
import { Tile } from "../Tile/Tile";

export const Row = (props) => {
  return (
    <div>
      {props.content.map((el, index) => {
        return <Tile text={el} onPress={props.onPress} key={`${el} ${index}`} />;
      })}
    </div>
  );
};
