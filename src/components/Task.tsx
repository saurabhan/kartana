import React from "react";
import { BsCircleFill } from "react-icons/bs";
import { Draggable } from "react-beautiful-dnd";
import {MdSignalCellular1Bar, MdSignalCellular2Bar, MdSignalCellular3Bar} from "react-icons/md";
import Image from "next/image";
interface Props {
  task: {
    id: string;
    name: string;
    assignedTo?: { name: string } | undefined;
    priority: string;
  };
  index: number;
}

const priorityIcons = {
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
              className={`  relative flex flex-col gap-2  bg-white p-5 rounded-lg shadow-lg`}
            >
              <div className="flex justify-between">

              <p className="text-sm ">{task?.id}</p>
              {task?.assignedTo ? (
                <div className="">
                  <Image className="rounded-full" src={`https://avatars.dicebear.com/api/initials/${task?.assignedTo?.name}.svg`} width={20} height={20} />
                </div>
              ) : (
                <div className="">
                  <Image className="rounded-full" src={`https://avatars.dicebear.com/api/identicon/unkown.svg`} width={20} height={20} />
                  </div>
              )}
              </div>
              <p className="font-semibold">{task?.name}</p>
              {
                task.priority && (
                  task?.priority === "low" ? <MdSignalCellular1Bar/> :
                  task?.priority === "medium" ? <MdSignalCellular2Bar/> :
                  task?.priority === "high" ? <MdSignalCellular3Bar/> :
                  "")
              }
            </div>
          </div>
        )}
      </Draggable>
    </>
  );
};

export default Task;
