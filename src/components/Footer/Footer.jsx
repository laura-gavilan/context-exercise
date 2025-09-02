import { useTheme } from "../../Context/ThemeContext"

export const Footer = () => {
    const {theme} = useTheme();

    return (
        <div className={`footer ${theme}`}>
            <h2>{theme === "light" ? "Light Mode" : "Dark Mode"}</h2>
        </div>
    )
}