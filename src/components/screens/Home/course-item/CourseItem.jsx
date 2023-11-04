/* eslint-disable react/prop-types */
import { useNavigate } from "react-router-dom";
import styles from "./CourseItem.module.scss";

function CourseItem({ course }) {
	const nav = useNavigate();

	return (
		<div onClick={() => nav("/course/" + course.id)} className={styles.block}>
			<img className={styles.icon} src={course.img} alt="" />
			<div className={styles.text}>
				<div className={styles.name}>
					{course.name}
					<span className={styles.type}>{course.type}</span>
				</div>
				<div className={styles.desc}>{course.desc}</div>
			</div>
		</div>
	);
}

export default CourseItem;
