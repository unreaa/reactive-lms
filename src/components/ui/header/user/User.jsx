import styles from "./User.module.scss";
import { useContext } from "react";
import { AuthContext } from "../../../../providers/AuthProvider";

function User() {
	const { user, setUser } = useContext(AuthContext);

	if (user)
		return (
			<span
				onClick={() => setUser(null)}
				className={styles.user + " " + styles.authorised}
			>
				{user}
			</span>
		);
	else
		return (
			<span className={styles.user + " " + styles.unauthorised}>Войти</span>
		);
}

export default User;
