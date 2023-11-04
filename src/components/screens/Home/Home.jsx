import { useState, useEffect, useContext } from "react";
import { CourseService } from "../../../services/course.service";
import Header from "../../ui/header/Header";
import Footer from "../../ui/footer/Footer";
import CourseItem from "./course-item/CourseItem";
import styles from "./Home.module.scss";
import { AuthContext } from "../../../providers/AuthProvider";
import { useNavigate } from "react-router-dom";

function Home() {
	const [courses, setCourses] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			const data = await CourseService.getAll();

			setCourses(data);
		};
		fetchData();
	}, []);

	const { user, setUser } = useContext(AuthContext);

	const nav = useNavigate();

	if (!user) nav("/login");

	return (
		<div className="wrapper">
			<Header />
			<main>
				<h1 className={styles.headline}>IT-Квантум.Курсы</h1>
				<div className={styles.courses}>
					{courses.map((course) => (
						<CourseItem key={course.id} course={course} />
					))}
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Home;
