import Image from "next/image";

export default function Home() {
	return (
		<section className="container__notify">
			<header className="notify">
				<h2 className="notify__title">Notifications 3</h2>
				<span className="notify__num">3</span>
				<button className="notify__read">Mark all as read</button>
			</header>
		</section>
	);
}
