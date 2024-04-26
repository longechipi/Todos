import LigthIcon from "./icons/LigthIcon"
import MoonIcon from "./icons/MoonIcon"
import { useEffect, useState } from "react"

const initialDarkMode = localStorage.theme === "dark" ? true : false
const Header = () => {
  const [dark, setDark] = useState(initialDarkMode)

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark")
      localStorage.theme = "dark"
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.theme = "light"
    }
  }, [dark])

  return (
    <header className="container mx-auto px-4 pt-8 transition-all duration-700 md:max-w-xl">
      <div className="flex justify-between">
        <h1 className="text-3xl font-semibold uppercase tracking-widest text-white">
          todo
        </h1>
        <button onClick={() => setDark(!dark)}>
          {dark ? <LigthIcon /> : <MoonIcon />}
        </button>
      </div>
    </header>
  )
}
export default Header
