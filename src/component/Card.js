import style from "./Card.module.css";

const imgArr = [
	{
		race: "Hobbit",
		img:
			"https://avatars.mds.yandex.net/get-zen_doc/1888335/pub_5e025a773639e600ae36af15_5e025af09515ee00afc8558c/scale_1200",
	},
	{
		race: "Human",
		img: "https://demiart.ru/forum/uploads20/post-2757924-1503286874.jpg",
	},
	{
		race: "Dworf",
		img:
			"https://i.pinimg.com/236x/85/cf/07/85cf07d9b9c09f355d82a72851e459a3.jpg",
	},
	{
		race: "Elf",
		img: "https://imageup.ru/img92/1612878/elfinik.jpg",
	},
];

export default function Card({ id, name, race }) {
	return (
		<div className={style.cardWrapper}>
			<p className={style.name}>
				Name: {name} | Race: {race}
			</p>
			<img className={style.img} src={imgArr[id - 1].img} />
			<div className={style.buttonWrapper}>
				<input
					className={style.btn}
					type="button"
					value="Изменить имя"
				/>
				<input className={style.btn} type="button" value="Удалить" />
			</div>
		</div>
	);
}
