import Router from "./components/Router";
import AuthProvider from "./providers/AuthProvider";

function App() {
	return (
		<AuthProvider>
			<Router />
		</AuthProvider>
	);
}

export default App;
