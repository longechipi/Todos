import { useState } from "react"

const ToDoCreate = ({ createToDo }) => {
  const [title, setTitle] = useState("")

  const enviar = (e) => {
    e.preventDefault()

    if (title.trim() === "") {
      return alert("Ingrese un titulo")
    } else {
      createToDo(title)
    }
    setTitle("")
  }
  return (
    <form
      className="flex items-center gap-4 overflow-hidden rounded-md bg-white px-4 py-4 transition-all duration-700 dark:bg-gray-800"
      onSubmit={enviar}
    >
      <span className=" inline-block h-5 w-5 rounded-full border-2"></span>
      <input
        className=" w-full text-gray-400 outline-none transition-all duration-700 dark:bg-gray-800"
        type="text"
        placeholder="Crear Nueva Tarea..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  )
}

export default ToDoCreate
