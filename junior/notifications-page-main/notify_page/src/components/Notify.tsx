"use client";
import React from "react";
import Image from "next/image";
import "./notify.css";
export const Notify = ({ notify }) => {
	const status = notify.status === "unread";

	return (
		<article className={`notify ${status ? "read" : null}`}>
			<Image
				className="notify__avatar"
				src={notify.avatar}
				alt="Picture of the author"
			/>
			<section className="notify__info">
				<span className="notify__description">
					<span className="description__name">{notify.name}</span>
					{notify.type}
					{status ? <span className="active__circle"></span> : null}
				</span>
				<span className="description__time">{notify.time}</span>

				{notify.message ? (
					<p className="description__message">{notify.message}</p>
				) : null}
			</section>
		</article>
	);
};
