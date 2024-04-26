import CheckIcon from "./icons/CheckIcon"
import CrossIcon from "./icons/CrossIcon"
import React from "react"

const ToDoItem = React.forwardRef(
  ({ todo, updateToDo, removeToDo, ...props }, ref) => {
    const { id, title, status } = todo
    return (
      <article
        ref={ref}
        {...props}
        className=" flex gap-4 border-b border-b-gray-300  dark:bg-gray-800"
      >
        <button
          className={`h-5 w-5 rounded-full border-2 ${status ? "flex items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" : "inline-block"}`}
          onClick={() => updateToDo(id)}
        >
          {" "}
          {status && <CheckIcon />}
        </button>
        <p
          className={`grow text-gray-600 transition-all duration-700 dark:text-gray-300 ${status && " line-through"}`}
        >
          {title}
        </p>

        <button className=" flex-none" onClick={() => removeToDo(id)}>
          <CrossIcon />
        </button>
      </article>
    )
  }
)

export default ToDoItem
