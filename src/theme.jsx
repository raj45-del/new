import React, {useState, useEffect} from "react";

function ThemeToggler(){

    const [theme, setTheme] = useState("light")

    // Load saved theme from localStorage on mount
    useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
        if (savedTheme) {
        setTheme(savedTheme);
        }
    }, []);

    // Save theme to localStorage whenever it changes
    useEffect(() => {
        localStorage.setItem("theme", theme);
    }, [theme]);

    const handleTheme=()=>{
        setTheme(theme === "light" ? "dark" : "light");
    }
    
    const themeStyle = {
        backgroundColor: theme === "dark" ? "#222" : "#fff",
        color: theme === "dark" ? "#fff" : "#000",
        height: "100vh",
        width: "200vh",
        padding: "20px",
        textAlign: "center",
    };


    return(
        <div style={themeStyle}>
        <button onClick={handleTheme}>Switch to {theme === "light" ? "Dark" : "Light"} Mode</button>

        </div>
    )
}

export default ThemeToggler