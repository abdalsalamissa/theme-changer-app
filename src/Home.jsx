import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Home() {
    const {theme} = useContext(ThemeContext);

    return(
        <div style={{backgroundColor: theme === 'light' ? '#f0f0f0' : '#1e1e1e',
            color: theme === 'light' ? '#333' : '#fff',
            width: '100vw',
            height: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.3s ease-in-out',
            fontFamily: 'Arial, sans-serif',
        }}>
            <h1 style={{fontSize: '3rem', marginBottom: '15px'}}>{theme === 'light' ? '🌞Light Theme' : '🌙Dark Theme'}</h1>
        </div>
    );
}