"use client";
import React from "react";
import { Notify } from "./Notify";
import obj from "../ts/db";

export const Modal = () => {
	const updatedObj = [...obj];
	const totalNotify = updatedObj.filter((num) => num.status === "unread");

	const handleRead = () => {
		const updatedData = updatedObj.map((item) => {
			console.log(item.status);
			if (item.status === "unread") {
				return { ...item, status: "read" };
			}
			return item;
		});
	};

	return (
		<article className="modal">
			<section className="modal__main">
				<h2 className="modal__title">
					Notifications
					<span className="modal__num">{totalNotify.length}</span>
				</h2>
				<button className="modal__read" onClick={handleRead}>
					Mark all as read
				</button>
			</section>
			{updatedObj.map((notify) => (
				<Notify notify={notify} key={notify.id} />
			))}
		</article>
	);
};
