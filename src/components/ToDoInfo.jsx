const ToDoInfo = ({ changeFilter, filter }) => {
  return (
    <section className="container mx-auto">
      <div className=" mx-auto mt-8 flex justify-center gap-4 rounded-md bg-white p-4 transition-all duration-700 dark:bg-gray-800">
        <button
          className={
            filter === "TODOS"
              ? "text-blue-600 "
              : "hover:text-blue-600 dark:text-gray-300"
          }
          onClick={() => changeFilter("TODOS")}
        >
          TODOS
        </button>
        <button
          className={
            filter === "ACTIVOS"
              ? "text-blue-600"
              : "hover:text-blue-600 dark:text-gray-300"
          }
          onClick={() => changeFilter("ACTIVOS")}
        >
          ACTIVOS
        </button>
        <button
          className={
            filter === "COMPLETADOS"
              ? "text-blue-600"
              : "hover:text-blue-600 dark:text-gray-300"
          }
          onClick={() => changeFilter("COMPLETADOS")}
        >
          COMPLETADOS
        </button>
      </div>
    </section>
  )
}
export default ToDoInfo
