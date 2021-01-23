import useEffect from "react";
import style from "./App.module.css";
import Card from "./component/Card";

const fakeDB = [
	{
		id: 1,
		name: "Frodo",
		race: "Hobbit",
	},
	{
		id: 2,
		name: "Aragorn",
		race: "Human",
	},
	{
		id: 3,
		name: "Gimli",
		race: "Dworf",
	},
	{
		id: 4,
		name: "Legolas",
		race: "Elf",
	},
];

const colum = [
	{ id: 1, race: "Hobbit" },
	{ id: 2, race: "Human" },
	{ id: 3, race: "Dworf" },
	{ id: 4, race: "Elf" },
];

function App() {
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
						{fakeDB
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

export default App;
