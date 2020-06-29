import React, { useState } from "react";

import { AppDragDropDemo } from "./draggable/todo/AppDragDropDemo";

import "./App.scss";
import { List } from "./draggable/list/List";

const App = () => {
  const [displayList, setDisplayList] = useState(false);

  const [colors, setColors] = useState([
    "Cyan",
    "Aqua",
    "Blue",
    "Yellow",
    "Black",
    "White",
    "Gray",
  ]);

  return (
    <div className='App'>
      <h2>Typescript and SASS test app</h2>

      <span
        style={{ cursor: "pointer" }}
        onClick={() => setDisplayList(displayList ? false : true)}
      >
        Draggable list{" "}
        <i
          className={`far ${
            !displayList ? "fa-plus-square" : "fa-minus-square"
          }`}
          style={{ paddingLeft: "5px" }}
        ></i>
      </span>

      {displayList && (
        <div className='section-container'>
          <List items={colors} setItems={setColors} />
        </div>
      )}
      {/*
         <AppDragDropDemo />
         <i class="far fa-minus-square"></i>
     */}
    </div>
  );
};

export default App;
