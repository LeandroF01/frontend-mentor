"use client";
import React from "react";
import Image from "next/image";
import "./notify.css";
export const Notify = ({ notify, handleClick }) => {
	const status = notify.status === "unread";

	return (
		<article
			className={`notify ${status ? "read" : null}`}
			onClick={() => handleClick(notify.id)}>
			<Image
				className="notify__avatar"
				src={notify.avatar}
				alt="Picture of the author"
			/>
			<section className="notify__info">
				<span className="notify__description">
					<span className="description__name">{notify.name}</span>
					{notify.type}
					{notify.post ? (
						<span className="active__post">{notify.post}</span>
					) : null}
					{notify.group ? (
						<span className="active__group">{notify.group}</span>
					) : null}
					{status ? <span className="active__circle"></span> : null}
				</span>
				<span className="description__time">{notify.time}</span>

				{notify.message ? (
					<p className="description__message">{notify.message}</p>
				) : null}
				{notify.image ? (
					<Image
						className="description__img"
						src={notify.image}
						alt="picture"
					/>
				) : null}
			</section>
		</article>
	);
};
