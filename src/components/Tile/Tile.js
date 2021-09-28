import React from "react";
import "./Tile.css";
export const Tile = (props) => {

  const onPress = () => {
    props.onPress(props.text)
  }

  return <button onClick={onPress} className="tile">{props.text}</button>;
};
