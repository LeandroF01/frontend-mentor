import box from "../../../images/illustration-box-desktop.svg";
import avatar from "../../../images/illustration-woman-online-desktop.svg";
import arrow from "../../../images/icon-arrow-down.svg";
import React, { useState } from "react";
import data from "../json/database.json";

const Card = () => {
  const [value, setValue] = useState<Number>(0);

  const handleCLick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const filter = data.filter((el) => {
      el.id === Number(e.target.dataset.number) && setValue(el.id);
    });

    if (value !== 0) {
      setValue(0);
    }

    return filter;
  };

  const height = value !== 0 ? "card-height" : "";

  return (
    <article className={`card ${height}`}>
      <section className="container-image">
        <img className="card-avatar" src={avatar} alt="" />
      </section>
      <img className="card-box" src={box} alt="" />
      <section className="container-questions">
        <h2 className="card-title">FAQ</h2>

        {data.map(({ id, questions, text }) => (
          <article
            key={id}
            className={`card-questions ${value === id ? "color-text" : ""}`}>
            {questions}
            {value === id ? (
              <article className="text-questions">{text}</article>
            ) : null}
            <button
              onClick={handleCLick}
              name="buttonQuest"
              data-number={id}
              className="arrow-questions">
              <img
                data-number={id}
                className={value === id ? "arrow-up" : ""}
                src={arrow}
                alt="arrow"
              />
            </button>
          </article>
        ))}
      </section>
    </article>
  );
};

export default Card;
