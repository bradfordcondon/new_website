import React from "react";
import { lifeEvents } from "./life_data";

var _ = require("lodash");

const FocusBubble = ({ bubble }) => {
  return (
    <div id="focused-bubble-card">
      <h4 >{bubble.name}</h4>
      {bubble.title && <label className="label-title">{bubble.title}</label>}
      {bubble.startDate && <span><label>Start</label> {bubble.startDate}</span>}
      {bubble.endDate && <span><label className="label-startdate">End</label> {bubble.endDate}</span>}
    
    </div>
  );
};


const Bubble = ({ bubble, size, color, direction, setBubble }) => {
  return (
    <div
      className={`bubble ${direction}`}
      style={{ backgroundColor: color, width: size, height: size }}
      onClick={() => {
        setBubble(bubble);
      }}
    >
      {" "}
      <label>{bubble.name}</label>{" "}
    </div>
  );
};

const LifeBubbles = ({ focusBubble, setBubble }) => {
  let i = 0;
  let colors = [
    "#70d6ff",
    "#ff70a6",
    "#ff9770",
    "#ffd670",
    "#e9ff70",
    "#70d6ff",
  ];
  const sizes = [100, 150, 200];
  let directions = ["a", "b", "c", "d", "e", "f"];


  return (
    <div className="life-bubbles">

      {focusBubble != null && 

      <FocusBubble bubble={focusBubble}/>
      
      
      }
      {lifeEvents.map((bubble) => {
        i++;
        colors = _.shuffle(colors);
        directions = _.shuffle(directions);
        const color = colors.pop();
        const size = _.sample(sizes);
        const direction = directions.pop();

        return (
          <Bubble
            key={`bubble-${i}`}
            color={color}
            size={size}
            direction={direction}
            setBubble={setBubble}
            bubble={bubble}
          />
        );
      })}
    </div>
  );
};

export default LifeBubbles;
