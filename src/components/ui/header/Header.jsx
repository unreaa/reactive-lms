import styles from "./Header.module.scss";
import User from "./user/User";

function Header() {
	return (
		<header>
			<span className={styles.title}>Кванториум</span>
			<User />
		</header>
	);
}

export default Header;
