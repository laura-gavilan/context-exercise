import { useContext } from "react";
import { UserContext } from "../../context/UserContext"; 

export const UserStatus = () => {
    const { user, logout } = useContext(UserContext);

    const isLoggedIn = user?.nombre?.trim() !== "";

    return (
        <div>
            <p>Bienvenido, {isLoggedIn ? user.nombre : "Invitado"}!</p>

            {user.rol === "admin" && (
                <button>Administrar</button>
            )}

            {isLoggedIn && (
                <button onClick={logout}>Cerrar sesión</button>
            )}
        </div>
    );
};

