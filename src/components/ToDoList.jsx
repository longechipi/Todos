import { Droppable, Draggable } from "@hello-pangea/dnd"
import ToDoItem from "./ToDoItem"
import PropTypes from "prop-types"

const ToDoList = ({ todos, updateToDo, removeToDo }) => {
  ToDoList.propTypes = {
    todos: PropTypes.array.isRequired,
  }
  return (
    <Droppable droppableId="todos">
      {(droppableProvider) => (
        <div
          ref={droppableProvider.innerRef}
          {...droppableProvider.droppableProps}
          className="mt-8 overflow-hidden rounded-t-md bg-white transition-all duration-700 dark:bg-slate-800 [&>article]:p-4"
        >
          {todos.map((todo, index) => (
            <Draggable key={todo.id} index={index} draggableId={`${todo.id}`}>
              {(draggableProvider) => (
                <ToDoItem
                  todo={todo}
                  updateToDo={updateToDo}
                  removeToDo={removeToDo}
                  ref={draggableProvider.innerRef}
                  {...draggableProvider.draggableProps}
                  {...draggableProvider.dragHandleProps}
                />
              )}
            </Draggable>
          ))}
          {droppableProvider.placeholder}
        </div>
      )}
    </Droppable>
  )
}

export default ToDoList
