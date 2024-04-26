import { DragDropContext } from "@hello-pangea/dnd"
import { useEffect, useState } from "react"
import Header from "./components/Header"
import ToDoCreate from "./components/ToDoCreate"
import ToDoDelete from "./components/ToDoDelete"
import ToDoFooter from "./components/ToDoFooter"
import ToDoInfo from "./components/ToDoInfo"
import ToDoList from "./components/ToDoList"

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || []
const App = () => {
  const [todos, setTodos] = useState(initialStateTodos)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  const createToDo = (title) => {
    const newTodo = {
      id: parseInt(Date.now() * Math.random()),
      title: title.trim(),
      status: false,
    }
    setTodos([...todos, newTodo])
  }
  const updateToDo = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          status: !todo.status,
        }
      }
      return todo
    })
    setTodos(newTodos)
  }
  const removeToDo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }
  const counToDo = () => {
    return todos.filter((todo) => !todo.status).length
  }
  const deleteToDoCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.status)
    setTodos(newTodos)
  }

  const [filter, setFilter] = useState("TODOS")
  const filterToDo = () => {
    switch (filter) {
      case "TODOS":
        return todos
      case "ACTIVOS":
        return todos.filter((todo) => !todo.status)
      case "COMPLETADOS":
        return todos.filter((todo) => todo.status)
      default:
        return todos
    }
  }

  const changeFilter = (filter) => {
    setFilter(filter)
  }

  return (
    <>
      <div className=" min-h-screen bg-gray-300 bg-[url('./assets/bg-mobile-light.jpg')] bg-contain bg-no-repeat  md:bg-[url('./assets/bg-desktop-light.jpg')] dark:bg-gray-900 dark:bg-[url('./assets/bg-mobile-dark.jpg')] dark:md:bg-[url('./assets/bg-desktop-dark.jpg')]">
        <Header />
        <main className="container mx-auto mt-8 px-4 md:max-w-xl">
          <ToDoCreate createToDo={createToDo} />
          <DragDropContext
            onDragEnd={({ source, destination }) => {
              if (!destination) return
              const newTodos = Array.from(todos)
              const [removed] = newTodos.splice(source.index, 1)
              newTodos.splice(destination.index, 0, removed)
              setTodos(newTodos)
            }}
          >
            <ToDoList
              todos={filterToDo()}
              updateToDo={updateToDo}
              removeToDo={removeToDo}
            />
          </DragDropContext>
          <ToDoDelete
            counToDo={counToDo()}
            deleteToDoCompleted={deleteToDoCompleted}
          />
          <ToDoInfo changeFilter={changeFilter} filter={filter} />
        </main>
        <ToDoFooter />
      </div>
    </>
  )
}

export default App
