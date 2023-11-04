import { useState, useContext } from "react";
import styles from "./Login.module.scss";
import { AuthContext } from "../../../providers/AuthProvider";
import { UserService } from "../../../services/user.service";
import { useNavigate } from "react-router-dom";

function Login() {
	const [login, setLogin] = useState("");
	const [password, setPassword] = useState("");
	const { user, setUser } = useContext(AuthContext);

	const auth = () => {
		setUser(UserService.authorise(login, password) ? login : null);
		console.log(user);
	};

	const nav = useNavigate();

	if (user) nav("/");

	return (
		<div className={styles.login}>
			<h1>Авторизуйтесь для доступа</h1>
			<form>
				<input
					type="text"
					placeholder="Логин"
					value={login}
					onChange={(e) => setLogin(e.target.value)}
				/>
				<input
					type="text"
					placeholder="Пароль"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button
					onClick={(e) => {
						e.preventDefault();
						auth();
					}}
				>
					Войти
				</button>
			</form>
		</div>
	);
}

export default Login;
