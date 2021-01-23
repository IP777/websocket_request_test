import useEffect from "react";
import style from "./App.module.css";

function App() {
	const handelbarOnclick = () => {
		console.log("click");
	};
	return (
		<>
			<h1>Hello react</h1>
			<input type="button" value="Click" onClick={handelbarOnclick} />
		</>
	);
}

export default App;
