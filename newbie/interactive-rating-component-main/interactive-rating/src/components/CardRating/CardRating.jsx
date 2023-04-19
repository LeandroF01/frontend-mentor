import React from "react";
import icon from "../../assets/images/icon-star.svg";
import "./ratingStyle.css";

export const CardRating = ({ numStart, handleClick, handleSubmit }) => {
  return (
    <article className="card">
      <section className="card-rating">
        <img className="img-star" src={icon} alt="" />
        <section className="rating-text">
          <h2 className="rating-title">How did we do?</h2>
          <p className="rating-parag">
            Please let us know how we did with your support request. All
            feedback is appreciated to help us improve our offering!
          </p>
        </section>
        <section className="rating-num_button">
          {numStart?.map((num, index) => (
            <button
              onClick={() => handleClick(num)}
              className="num_button"
              key={index}>
              {num}
            </button>
          ))}
        </section>
        <button onClick={handleSubmit} className="rating-sumbit">
          SUBMIT
        </button>
      </section>
    </article>
  );
};
