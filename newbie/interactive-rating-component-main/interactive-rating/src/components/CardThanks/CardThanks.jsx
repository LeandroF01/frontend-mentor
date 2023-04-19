import React from "react";
import img from "../../assets/images/illustration-thank-you.svg";
import "./thanksStyle.css";

export const CardThanks = ({ value }) => {
  return (
    <article className="card">
      <section className="card-thanks">
        <section className="thanks-header">
          <img className="thanks-img" src={img} alt="" />
          <span className="thanks-star">{`You selected ${value} out of 5`}</span>
        </section>
        <section className="thanks-text">
          <h2 className="thanks-title">Thank you!</h2>
          <p className="thanks-parag">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </section>
      </section>
    </article>
  );
};
