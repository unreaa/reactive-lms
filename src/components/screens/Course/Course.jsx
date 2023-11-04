import { useParams } from "react-router-dom";
import Footer from "../../ui/footer/Footer";
import Header from "../../ui/header/Header";
import styles from "./Course.module.scss";
import { useEffect, useState } from "react";
import { CourseService } from "../../../services/course.service";

function Course() {
	const { id } = useParams();
	const [course, setCourse] = useState({});

	useEffect(() => {
		if (!id) return;

		const fetchData = async () => {
			const data = await CourseService.getById(id);

			setCourse(data);
		};
		fetchData();
	}, [id]);

	return (
		<div className="wrapper">
			<Header />
			<main>
				<h1 className={styles.headline}>
					Курс {course.name} <span className={styles.type}>{course.type}</span>
				</h1>
				<div className={styles.element}>
					<h2>Git и GitHub</h2>
					<ol className={styles.list}>
						<li>Что такое Git</li>
						<li>Инструкция по установке</li>
						<li>Основные команды</li>
					</ol>
				</div>
			</main>
			<Footer />
		</div>
	);
}

export default Course;
