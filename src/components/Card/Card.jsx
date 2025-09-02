import { useTheme } from "../../Context/ThemeContext"

export const Card = () => {
    const  {theme} = useTheme();

    return (
        <div className={`card ${theme}`}>
            <h2>{theme === "light" ? "White" : "Black"}</h2>
        </div>
    )
}