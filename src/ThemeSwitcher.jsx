import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function ThemeSwitcher() {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <button style={{position: 'absolute',
                bottom: '50px',
                left: '50%',
                transform: 'translateX(-50%)',
                padding: '10px 10px',
                fontSize: '1rem',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                backgroundColor: theme === 'light' ? '#333' : '#fff',
                color: theme === 'light' ? '#fff' : '#333',
                transition: 'all 0.3s ease-in-out'
            }} onClick={toggleTheme}>
                {theme === 'light' ? '🌙Dark Theme' : '🌞Light Theme'}
            </button>
        </div>
    );
}