import React, { useState } from "react";

export const AppDragDropDemo = () => {
  const [tasks, setTasks] = useState({
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" },
    ],
  });

  const [status, setStatus] = useState({
    wip: [],
    complete: [],
  });

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragStart = (e, id) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("text/plain", id);
  };

  const onDrop = (e, category) => {
    let id = e.dataTransfer.getData("text");

    let updatedTask = tasks.filter((task) => {
      if (task.name == id) {
        task.category = category;
        return task;
      }
    });
    setTasks({
      ...tasks,
      updatedTask,
    });
  };

  const filterTasks = (tasks) => {
    const wip = [];
    const complete = [];
    tasks.forEach((task) => {
      if (tasks[task.category] === "wip") {
        wip.push(task);
      } else {
        complete.push(task);
      }
    });
    setStatus({
      wip,
      complete,
    });
  };

  const renderTasks = (tasks) => {
    console.log("task on function", tasks);
    tasks.map((task) => {
      return (
        <div
          key={task.name}
          onDragStart={(e) => this.onDragStart(e, task.name)}
          draggable
          className='draggable'
          style={{ backgroundColor: task.bgcolor }}
        >
          {task.name}
        </div>
      );
    });
  };

  console.log("tasks", tasks);

  return (
    <div
      className='container-drag'
      style={{ display: "flex", justifyContent: "space-between" }}
    >
      <div
        className='wip'
        style={{
          background: "green",
          height: 500,
          padding: 10,
        }}
        onDrop={(e) => {
          this.onDrop(e, "wip");
        }}
      >
        <span className='task-header'>WIP</span>
        {tasks && renderTasks(status.wip)}
      </div>
      <div
        className='droppable'
        style={{
          background: "cyan",
          height: 500,
          padding: 10,
        }}
        onDragOver={(e) => this.onDragOver(e)}
        onDrop={(e) => this.onDrop(e, "complete")}
      >
        <span className='task-header'>COMPLETED</span>
        {tasks && renderTasks(status.complete)}
      </div>
    </div>
  );
};

/*
export default class AppDragDropDemo extends Component {
  state = {
    tasks: [
      { name: "Learn Angular", category: "wip", bgcolor: "yellow" },
      { name: "React", category: "wip", bgcolor: "pink" },
      { name: "Vue", category: "complete", bgcolor: "skyblue" },
    ],
  };

  onDragOver = (e) => {
    e.preventDefault();
  };

  onDragStart = (e, id) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("text/plain", id);
  };

  onDrop = (e, category) => {
    let id = e.dataTransfer.getData("text");

    let tasks = this.state.tasks.filter((task) => {
      if (task.name == id) {
        task.category = category;
        return task;
      }
    });
    this.setState({
      ...this.state.tasks,
      tasks,
    });
  };

filterTasks = (tasks) => {
  const wip = [];
  const complete = [];
  tasks.forEach((task) => {
    if(tasks[task.category] === 'wip'){
      wip.push(task);
    } else {
      complete.push(task);
    }
  });
  //setStatus({
   // wip, complete
//  })
}

renderTasks = (tasks) => {
  tasks.map((task) => {
   return (
      <div
        key={task.name}
        onDragStart={(e) => this.onDragStart(e, task.name)}
        draggable
        className='draggable'
        style={{ backgroundColor: task.bgcolor }}
      >
        {task.name}
      </div>
    );
  });
}

  render() {
    let tasks = {
      wip: [],
      complete: [],
    };

    console.log("tasks", tasks);
    console.log(this.state, "state");

    this.state.tasks.forEach((task) => {
      tasks[task.category].push(
        <div
          key={task.name}
          onDragStart={(e) => this.onDragStart(e, task.name)}
          draggable
          className='draggable'
          style={{ backgroundColor: task.bgcolor }}
        >
          {task.name}
        </div>
      );
    });

    return (
      <div
        className='container-drag'
        style={{ display: "flex", justifyContent: "space-between" }}
      >
        <div
          className='wip'
          style={{
            background: "green",
            height: 500,
            padding: 10,
          }}
          onDrop={(e) => {
            this.onDrop(e, "wip");
          }}
        >
          <span className='task-header'>WIP</span>
          {tasks.wip}
        </div>
        <div
          className='droppable'
          style={{
            background: "cyan",
            height: 500,
            padding: 10,
          }}
          onDragOver={(e) => this.onDragOver(e)}
          onDrop={(e) => this.onDrop(e, "complete")}
        >
          <span className='task-header'>COMPLETED</span>
          {tasks.complete}
        </div>
      </div>
    );
  }
}
*/
