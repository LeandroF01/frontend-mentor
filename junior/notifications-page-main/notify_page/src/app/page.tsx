import Image from "next/image";
import { Modal } from "../components/Modal";
import "./style.css";

export default function Home() {
	return (
		<main className="container__modal">
			<Modal />
		</main>
	);
}
