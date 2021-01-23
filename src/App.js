import { useEffect } from "react";
import style from "./App.module.css";
import Card from "./component/Card";
import { connect } from "react-redux";
import { getDB } from "./redux/appOperation";
import { getData } from "./redux/appReducer";

const colum = [
	{ id: 1, race: "Hobbit" },
	{ id: 2, race: "Human" },
	{ id: 3, race: "Dworf" },
	{ id: 4, race: "Elf" },
];

function App({ data, getDataBase }) {
	useEffect(() => {
		getDataBase({ cmd: "get_list" });
	}, []);

	const handelbarOnclick = () => {
		console.log("Add player");
	};

	return (
		<>
			<ul className={style.columWrapper}>
				{colum.map((colum) => (
					<li className={style.columItem} key={colum.id}>
						<h3 className={style.columName}>{colum.race}</h3>
						<input
							type="button"
							value="Add"
							className={style.addBtn}
							onClick={handelbarOnclick}
						/>
						{data
							.filter((person) => person.race === colum.race)
							.map((iter) => (
								<Card
									key={iter.id}
									id={iter.id}
									name={iter.name}
									race={iter.race}
								/>
							))}
					</li>
				))}
			</ul>
		</>
	);
}

//--------------------------------------------------------------
const mapStateToProps = (state) => ({
	data: getData(state),
});
const mapDispatchToProps = {
	getDataBase: getDB,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
