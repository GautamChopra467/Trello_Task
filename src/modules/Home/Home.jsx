import React, { useState } from "react";
import "./Home.css";
import Navbar from "../../shared/widgets/Navbar/Navbar";
import Stage from "../Stage/Stage";
import { DragDropContext } from "react-beautiful-dnd";

// Extracting the tasks-data locally stored at services folder
import { tasksInitialData } from "../../shared/services/tasksData"; 

const Home = () => {

  // state used for storing the data of all the tasks
  const [data, setData] = useState(tasksInitialData);

  const reorderColumnList = (sourceCol, sourceIndex, destinationIndex) => {
    const newTaskIds = Array.from(sourceCol.taskIds);
    // removing source task
    const [removedTask] = newTaskIds.splice(sourceIndex, 1);
    // adding that removed source task at new destination
    newTaskIds.splice(destinationIndex, 0, removedTask);

    const newCol = {
      ...sourceCol,
      taskIds: newTaskIds,
    }

    return newCol;
  }
  
  const onDragEnd = (answer) => {
    const { destination, source } = answer;

    // if user tries to drop at an unknown destination
    if(!destination) return;

    // if user tries to drop the task in the same stage at the same position
    if(destination.droppableId === source.droppableId && destination.index === source.index) return;

    // if user tries to drop the task in the same stage but at different position
    const sourceCol = data.columns[source.droppableId];
    const destinationCol = data.columns[destination.droppableId];

    if(sourceCol.id === destinationCol.id){
      const newCol = reorderColumnList(
        sourceCol,
        source.index,
        destination.index
      )

      const newData = {
        ...data,
        columns: {
          ...data.columns,
          [newCol.id]: newCol,
        },
      };

      setData(newData);
      return;
    }


    // if user tries to drop the task in different stage
    const sourceTaskIds = Array.from(sourceCol.taskIds);
    // removing source task
    const [removedTask] = sourceTaskIds.splice(source.index, 1);
    const newSourceCol = {
      ...sourceCol,
      taskIds: sourceTaskIds,
    }

    const destinationTaskIds = Array.from(destinationCol.taskIds);
    // adding the removed task at destination index in new column
    destinationTaskIds.splice(destination.index, 0, removedTask);
    const newDestinationCol = {
      ...destinationCol,
      taskIds: destinationTaskIds,
    }

    // creating the new data object
    const newData = {
      ...data,
      columns: {
        ...data.columns,
        [newSourceCol.id]: newSourceCol,
        [newDestinationCol.id]: newDestinationCol,
      }
    }

    // updating the old data
    setData(newData);
    return;
  }


  return (
    <div className="full_container_home">
      <Navbar />

      <DragDropContext onDragEnd={onDragEnd}>
        <div className="main_container_home">
          <div className="main_box_home">
            { data.columnOrder.map((columnId) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

              return <Stage key={column.id} column={column} tasks={tasks} data={data} setData={setData} />
            }) }
          </div>
        </div>
      </DragDropContext>
    </div>
  );
};

export default Home;
