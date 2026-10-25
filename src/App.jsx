import { useState } from 'react'
import { ThemeContext } from './ThemeContext'
import Home from './Home';
import ThemeSwitcher from './themeSwitcher';
import './App.css'

function App() {

  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>{
    setTheme(theme === "light" ? "dark" : "light");
  }

  return (
    <>
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div>
        <ThemeSwitcher />
        <Home />
      </div>
    </ThemeContext.Provider>
    </>
  )
}

export default App
