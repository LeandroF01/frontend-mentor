import box from "../../../images/illustration-box-desktop.svg";
import avatar from "../../../images/illustration-woman-online-desktop.svg";
import arrow from "../../../images/icon-arrow-down.svg";

const Card = () => {
  return (
    <article className="card">
      <section className="container-image">
        <img className="card-avatar" src={avatar} alt="" />
      </section>
      <img className="card-box" src={box} alt="" />
      <section className="container-questions">
        <h2 className="card-title">FAQ</h2>
        <article className="card-questions">
          How many team members can I invite?
          <article className="text-questions">
            You can invite up to 2 additional users on the Free plan. There is
            no limit on team members for the Premium plan.
          </article>
          <button className="arrow-questions">
            <img src={arrow} alt="arrow" />
          </button>
        </article>
        <article className="card-questions">
          What is the maximum file upload size?
          <article className="text-questions">
            No more than 2GB. All files in your account must fit your allotted
            storage space.
          </article>
          <button className="arrow-questions">
            <img src={arrow} alt="arrow" />
          </button>
        </article>
        <article className="card-questions">
          How do I reset my password?
          <article className="text-questions">
            Click “Forgot password” from the login page or “Change password”
            from your profile page. A reset link will be emailed to you.
          </article>
          <button className="arrow-questions">
            <img src={arrow} alt="arrow" />
          </button>
        </article>
        <article className="card-questions">
          Can I cancel my subscription?
          <article className="text-questions">
            Yes! Send us a message and we’ll process your request no questions
            asked.
          </article>
          <button className="arrow-questions">
            <img src={arrow} alt="arrow" />
          </button>
        </article>
        <article className="card-questions">
          Do you provide additional support?
          <article className="text-questions">
            Chat and email support is available 24/7. Phone lines are open
            during normal business hours.
          </article>
          <button className="arrow-questions">
            <img src={arrow} alt="arrow" />
          </button>
        </article>
      </section>
    </article>
  );
};

export default Card;
