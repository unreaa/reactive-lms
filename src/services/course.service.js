import axios from "axios";

const types = ["общий", "вводный", "углубленный", "проектный"];

export const CourseService = {
	async getAll() {
		const data = (await axios.get("/src/db/courses.json")).data;

		data.forEach((element) => {
			element.type = types[element.type];
		});

		return data;
	},

	async getById(id) {
		const data = await this.getAll();

		return data[id];
	},
};
