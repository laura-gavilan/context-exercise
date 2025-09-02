import './App.css'
import { Card } from './components/Card/Card';
import { Footer } from './components/Footer/Footer';
import { LoginForm } from './components/LoginForm/LoginForm';
import { UserStatus } from './components/UserStatus/UserStatus';
import { useTheme } from './Context/ThemeContext'
import { UserProvider } from './context/UserContext';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme} className='toggle-button'>
      {theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"}
    </button>
  );
};


export const App = () => {
  const { theme } = useTheme();

  return (
    <UserProvider>
      <div className={`container ${theme}`}>
        <ThemeToggleButton />

        <Card />

        <Footer />

        <UserStatus />

        <LoginForm />

      </div>
    </UserProvider>
  );
};


