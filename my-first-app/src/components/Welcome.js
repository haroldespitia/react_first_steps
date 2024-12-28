import { useState, useEffect } from "react";

export default function Welcome(props) {
  const [counter, setCounter] = useState(0);
  const [light, setLight] = useState(false);

  useEffect(() => {
    console.log(light);
  }, [light]);

  const counterFunction = () => {
    console.log("Entering the counterFunction function");
    setCounter(counter + 1);
    setLight(!light);
  };

  const { name } = props;
  return (
    <div>
      <h1>Hi, {name}</h1>
      <h2>React counter with Hooks</h2>
      <h4>Counter value is: {counter} </h4>
      <h4>The light is: {light ? "green" : "red"}</h4>
      <button type="submit" onClick={counterFunction}>
        Increment
      </button>
    </div>
  );
}
