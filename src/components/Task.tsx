import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { Draggable } from "react-beautiful-dnd";
interface Props {
  task: {
    id: string;
    name: string;
    assignedTo?: { name: string } | undefined;
    priority: string;
  };
  index: number;
}

const priorityColors = {
  low: "text-green-200",
  medium: "text-yellow-200",
  high: "text-red-200",
  urgent: "text-orange-200",
  critical: "text-purple-200",
};

const Task = (props: Props) => {
  const { task, index } = props;
  const color: string = task?.priority;
  return (
    <>
      <Draggable draggableId={task?.id} index={index}>
        {(provided, snapshot) => (
          <div
            key={task?.id}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <div
              className={`  relative  bg-white m-2 p-5 rounded-lg shadow-lg`}
            >
              <BsCircleFill
                className={`w-3 h-3 right-2 top-2 absolute ${
                  priorityColors[task?.priority as keyof typeof priorityColors]
                }`}
              />
              <p className="font-semibold">{task?.name}</p>
              {task?.assignedTo && (
                <div className="pt-5 text-sm ">
                  assigned to : {task?.assignedTo?.name}
                </div>
              )}
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Task;
