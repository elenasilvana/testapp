import React, { useState } from "react";

import "./list.styles.scss";

var placeholder = document.createElement("li");
placeholder.className = "placeholder";

interface ListProps {
  items: any;
  setItems: (payload: any) => void;
}

export const List = (props: ListProps) => {
  const { items, setItems } = props;

  const [dragged, setDragged] = useState(undefined);
  const [over, setOver] = useState(undefined);

  const dragStart = (e: any) => {
    const dragged = e.currentTarget;
    setDragged(dragged);
    e.dataTransfer.effectAllowed = "move";
    e.dataTransfer.setData("text/html", dragged);
  };

  const dragEnd = (e: any) => {
    const dragged = e.currentTarget;
    setDragged(dragged);
    dragged.style.display = "block";
    dragged.parentNode.removeChild(placeholder);

    //update state
    const data = [...items];
    //console.log("data", data);
    let from = dragged ? Number(dragged.dataset.id) : 0;
    //console.log("from", from);
    //@ts-ignore
    let to = over ? Number(over.dataset.id) : 0;
    //console.log("to", to);
    if (from > to) to--;
    //console.log("from > to", from > to);
    data.splice(to, 0, data.splice(from, 1)[0]);
    setItems(data);
  };

  const dragOver = (e: any) => {
    e.preventDefault();
    //@ts-ignore
    dragged.style.display = "none";
    if (e.target.className === "placeholder") {
      return;
    }
    setOver(e.target);

    e.target.parentNode.insertBefore(placeholder, e.target);
  };

  const listItems = () => {
    return items.map((color: string, i: string) => {
      return (
        <li
          data-id={i}
          key={i}
          draggable='true'
          onDragEnd={dragEnd}
          onDragStart={dragStart}
        >
          {color}
        </li>
      );
    });
  };

  return (
    <div className='draggable-component'>
      <ul onDragOver={dragOver}>{listItems()}</ul>
    </div>
  );
};
