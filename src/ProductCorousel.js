import Card from "./Card";
import { useState } from "react";
import "./styles.css";

export default function ProducCorousel() {
  const [cards, setCard] = useState(new Array(13));

  let box = document.querySelector(".container");
  const rightClick = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft + width / 3;
    console.log(width);
  };
  const leftClick = () => {
    let width = box.clientWidth;
    box.scrollLeft = box.scrollLeft - width / 3;
    console.log(width);
  };
  return (
    <div className="corousel">
      <button onClick={leftClick}>◀</button>
      <div className="container">
        <Card itemNo={0} key={0} />
        <Card itemNo={1} key={1} />
        <Card itemNo={2} key={2} />
        <Card itemNo={3} key={3} />
        <Card itemNo={4} key={4} />
        <Card itemNo={5} key={5} />
        <Card itemNo={6} key={6} />
        <Card itemNo={7} key={7} />
        <Card itemNo={8} key={8} />
        <Card itemNo={9} key={9} />
        <Card itemNo={10} key={10} />
        <Card itemNo={11} key={11} />
        <Card itemNo={12} key={12} />
        <Card itemNo={13} key={13} />
      </div>

      <button onClick={rightClick}>▶</button>
    </div>
  );
}
