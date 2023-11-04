import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./screens/Home/Home";
import Course from "./screens/Course/Course";
import Login from "./screens/Login/Login";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Home />} path="/" />
				<Route element={<Course />} path="/course/:id" />
				<Route element={<Login />} path="/login" />
				<Route
					path="*"
					element={
						<div>
							<h1>Error 404</h1>
						</div>
					}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
