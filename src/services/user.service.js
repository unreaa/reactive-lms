import axios from "axios";

export const UserService = {
	async authorise(login, password) {
		const data = (await axios.get("/src/db/users.json")).data;

		return data[login] == password;
	},
};
