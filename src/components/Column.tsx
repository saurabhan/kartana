import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import { HiPlus } from "react-icons/hi";

interface Props {
  item: {
    count: number;
    status: string;
    tasks: {
      id: string;
      name: string;
      assignedTo?: { name: string };
      priority: string;
    }[];
  };
  index: number;
}

const Column = (props: Props) => {
  const { item, index } = props;
  return (
    <>
      <div className="flex-1 p-5 bg-gray-100 rounded-md">
        <div className="flex items-center justify-between">
        <h1 className="font-bold text-lg">{item.status} {" "} {item.count}</h1>
        <HiPlus/>
        </div>
        <Droppable droppableId={item.status}>
          {(provided, snapshot) => (
            <ul ref={provided.innerRef} {...provided.droppableProps}>
              {item.tasks.length > 0 ? (
                item.tasks?.map((task, index) => {
                  return (
                    <Task key={task?.id} task={task} index={index}/>
                  );
                })
              ) : (
                <p className="p-5 text-center">No tasks</p>
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    </>
  );
};

export default Column;
