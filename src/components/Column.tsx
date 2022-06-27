import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import Task from "./Task";
import { HiPlus } from "react-icons/hi";
import {TbBrightness, TbCircleDotted } from "react-icons/tb";
import { BsCheckCircleFill, BsCircle, BsThreeDotsVertical } from "react-icons/bs";

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
      <div className="flex-1 relative bg-gray-100 rounded-md overflow-hidden overflow-y-scroll scrollbar-hide">
        <div className="sticky top-0 p-2  z-10 w-full flex border-b-2 border-spacing-2 items-center justify-between bg-gray-200">
          <div className="flex gap-2 items-center">
          {
            item.status === "backlog" ? <TbCircleDotted className=" w-5 h-5" /> :
            item.status === "in-progress" ? <TbBrightness className=" w-5 h-5" /> :
            item.status === "done" ? <BsCheckCircleFill className="text-blue-500 w-5 h-5" /> :
            item.status === "todo" ? <BsCircle className=" w-4 h-4" /> :
            ""
          }
        <p className="font-bold text-lg">{item.status} {" "} <span className="font-normal">{item.count}</span></p>
          </div>
          <div className="flex gap-2">

        <HiPlus/>
        <BsThreeDotsVertical/>
          </div>
        </div>
        <Droppable droppableId={item.status}>
          {(provided, snapshot) => (
            <ul ref={provided.innerRef} {...provided.droppableProps} className="flex flex-col gap-2 mt-2 ml-2 mr-2">
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
