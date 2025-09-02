import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";

const INITIAL_STATE = {
    email: "",
    nombre: "",
    rol: "user",
};

export const LoginForm = () => {
    const [loginData, setLoginData] = useState(INITIAL_STATE);
    const { setUser } = useContext(UserContext);


    const onInputChange = (event) => {
        const { name, value } = event.target;

        setLoginData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const onSubmit = () => {
        console.log(loginData);

        setUser(loginData);
    };

    return (
        <form onSubmit={onSubmit}>
            <p>Nombre</p>
            <input
                type="text"
                name="nombre"
                value={loginData.nombre}
                onChange={onInputChange}
                required
            />

            <p>Email</p>
            <input
                type="email"
                name="email"
                value={loginData.email}
                onChange={onInputChange}
                required
            />

            <p>Rol</p>
            <select name="rol" value={loginData.rol} onChange={onInputChange}>
                <option value="user">Usuario</option>
                <option value="admin">Administrador</option>
            </select>

            <button type="submit">Log in</button>
        </form>
    );
};
