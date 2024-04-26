const ToDoDelete = ({ counToDo, deleteToDoCompleted }) => {
  return (
    <section className=" flex justify-between rounded-b-md bg-white px-4 py-4 transition-all duration-700 dark:bg-gray-800 dark:text-gray-300">
      <span className=" text-gray-400 dark:text-gray-300">
        {counToDo <= 0 ? "No hay Tareas" : counToDo + " Tareas por Completar"}
      </span>
      <button
        className="text-gray-400  dark:text-gray-300"
        onClick={deleteToDoCompleted}
      >
        Limpiar Completadas
      </button>
    </section>
  )
}
export default ToDoDelete
