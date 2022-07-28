import React from "react";
import { lifeEvents } from "./life_data";
import { useSpring, animated } from "@react-spring/web";
import Jobs from "./Jobs";
var _ = require("lodash");

const excludeList = ["Games"]

const FocusBubble = ({ bubble }) => {
  if (bubble.jobs && bubble.jobs.length > 0) {
    return (
      <div id="focused-bubble-card">
        <h4>{bubble.name}</h4>
        <Jobs jobs={bubble.jobs} />
      </div>
    );
  }
  return (
    <div id="focused-bubble-card">
      <h4>{bubble.name}</h4>
      {bubble.title && <h5 className="label-title">{bubble.title}</h5>}
      {bubble.startDate && (
        <span>
          <label>Start</label> {bubble.startDate}
        </span>
      )}
      {bubble.endDate && (
        <span>
          <label className="label-startdate">End</label> {bubble.endDate}
        </span>
      )}
    </div>
  );
};


const Bubble = ({ bubble, size, color, i, setBubble }) => {


  let x =  size/10 -  (Math.random() * 150) ;
  let y = (size/10) + (Math.random() * 150);

  if (Math.random() < 0.5){
    x = -x
  }
  if (Math.random() < 0.5){
    y = -y
  }
  const delay = i * Math.random() *  100;
  const mass = 300;
  const config = {
    mass,
    friction: 520,
    tension: 120,
  };

  let xend = x + (Math.random() * 100)
  let yend = y + (Math.random() * 100)

  if (Math.random() < 0.5){
    xend = -xend

  }

  if (Math.random() < 0.5){
    yend = -yend
  }
  const springs = useSpring({
    from: { x: x, y: y },
    to: { x: xend, Y: yend },
    delay,
    config,
    reset: true,
  });

  if (bubble.name === "Games") {return null}

  return (
    <animated.div
      className={`bubble`}
      style={{ backgroundColor: color, width: size, height: size, ...springs }}
      onClick={() => {
        setBubble(bubble);
      }}
    >
      {" "}
      <label>{bubble.name}</label>{" "}
    </animated.div>
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
  const sizes = [75, 100, 150, 200];

  return (
    <div className="life-bubbles">
      {focusBubble != null && <FocusBubble bubble={focusBubble} />}
      {lifeEvents.map((bubble) => {
        i++;
        colors = _.shuffle(colors);
        const color = colors.pop();
        let size = _.sample(sizes);

        if (bubble.weight !== null) {
          const { weight } = bubble;

          size = sizes[weight];
        }

        return (
          <Bubble
            key={`bubble-${i}`}
            color={color}
            size={size}
            i={i}
            setBubble={setBubble}
            bubble={bubble}
          />
        );
      })}
    </div>
  );
};

export default LifeBubbles;
