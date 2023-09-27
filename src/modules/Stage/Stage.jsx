import React, { useState } from "react";
import "./Stage.css";
import { Draggable, Droppable } from "react-beautiful-dnd";
import { BsThreeDots } from "react-icons/bs";
import { AiOutlineClockCircle, AiOutlinePaperClip } from "react-icons/ai"

const Stage = ({ column, tasks, data, setData }) => {

  // state for toggling modal
  const [isModal, setIsModal] = useState(false);

  // state for storing the data required when creating a new task
  const [formData, setFormData] = useState({
    id: "",
    content: "",
    image: "",
    user: "",
    date: "",
    sharedCount: ""
  });

  // handling the form inputs
  const handleForm = (e) => {
    const {name, value} = e.target;
    
    const tasks = data.tasks;
    // extracting the the last task id 
    const oldId = Object.keys(tasks).pop();
    // adding at the new task id
    const newId = Number(oldId) + 1;

    setFormData({
      ...formData,
      id: newId,
      [name]: value
    })
  }

  // submitting the form
  const submitForm = (e) => {
    e.preventDefault();
    setIsModal(!isModal);     // closing the modal
    addACard(column.id);      // adding a new card/task
  }

  const addCard = (columnId) => {
    setIsModal(!isModal);
  }
  
  const addACard = (columnId) => {
    const newId = formData.id;

    // creating the new task
    const taskIds = Array.from(data.columns[columnId].taskIds);
    taskIds.push(newId);
  
    // adding the new task in the respective column
    const newCol = {
      ...data.columns[columnId],
      taskIds,
    }

    console.log("New Col",newCol)
    console.log("Form Data", formData)

    // creating the updated data object
    const newData = {
      ...data,
      tasks: {
        ...data.tasks,
        [newId]: formData,
      },
      columns: {
        ...data.columns,
        [columnId]: newCol,
      }
    }

    setData(newData);
  }

  console.log(column.title, tasks);
  return (
    <div className="main_container_stage">
      {console.log("DATA IS", data)}
      <div className="top_section_stage">
        <h2>{column.title}</h2>
        <BsThreeDots className="dots_stage" />
      </div>

      <Droppable droppableId={column.id}>
        {(droppableProvided, droppableSnapshot) => (
          <div
            className="middle_section_stage"
            ref={droppableProvided.innerRef}
            {...droppableProvided.droppableProps}
          >
            {tasks && tasks !== undefined && tasks !== "" &&
              tasks.map((task, index) => (
                <Draggable
                  key={task.id}
                  draggableId={`${task.id}`}
                  index={index}
                >
                  {(draggableProvided, draggableSnapshot) => (
                    <div
                      className="task_container_stage"
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.draggableProps}
                      {...draggableProvided.dragHandleProps}
                    >
                      <div className="task_top_section_stage">
                        {task.image === "" ? (
                          <div className="task_image_box_stage">
                            <div className="progress_bar_stage"></div>
                          </div>
                        ) : (
                          <img src={task.image} alt="task" />
                        )}
                      </div>

                      <div className="task_middle_section_stage">
                        <p>{task.content}</p>
                      </div>

                      <div className="task_bottom_section_stage">
                        <div className="task_bottom_left_section_stage">
                          <AiOutlineClockCircle className="clock_stage" />
                          <p>{task.date}</p>

                          {task.sharedCount === 0 ? ("") : (
                            <>
                            <AiOutlinePaperClip className="clip_stage" />
                            <h2>{task.sharedCount}</h2>
                            </>
                          )}
                        </div>

                        <div className="task_bottom_right_section_stage">
                          <img src={task.user} alt="user" />
                        </div>
                      </div>
                    </div>
                  )}
                </Draggable>
              ))}
          </div>
        )}
      </Droppable>

      <div className="bottom_section_stage">
         <button className="add_card_btn_stage" onClick={() => addCard(column.id)}>
          Add a card...
         </button>
      </div>

      {/* Task Modal */}

      {isModal && (
          <div className='modal_backgound_stage'>
          <div className='modal_container_stage'>
            <div className='modal_top_section_stage'>
              <h2>Add New Task</h2>

            </div>
  
            <div className='modal_mid_section_stage'>
              <form>
                <div className="form_box_stage">
                  <label>Task Content</label>
                  <input type="text" name="content" placeholder="Enter content"  onChange={handleForm} />
                </div>

                <div className="form_box_stage">
                  <label>Task Image Url</label>
                  <input type="url" name="image" placeholder="Enter task image url"   onChange={handleForm} />
                </div>

                <div className="form_box_stage">
                  <label>Date</label>
                  <input type="text" name="date" placeholder="Enter your task date"   onChange={handleForm} />
                </div>

                <div className="form_box_stage">
                  <label>User Image Url</label>
                  <input type="url" name="user" placeholder="Enter user image url"   onChange={handleForm} />
                </div>

                <div className='modal_bottom_section_stage'>
                  <button type='submit' onClick={submitForm} className='btn_primary_stage'>Save Details</button>
                </div>
              </form>
            </div>
            

            
          </div>
        </div>
        )}




    </div>
  );
};

export default Stage;
