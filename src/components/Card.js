import classes from "./Card.module.css";

export default function Card() {
  return (
    <div className={classes.card}>
      <section>
        <img
          src="../../images/Kattie.PNG"
          alt=""
          className={classes.card_image}
        />
        <div className={classes.card_stats}>
          <img
            src="../../images/star.png"
            alt=""
            className={classes.card_star}
          />
          <span>5.0</span>
          <span className={classes.gray}>(6) • </span>
          <span className={classes.gray}>USA</span>
        </div>
        <p>Life Lessons with Katie Zaferes</p>
        <p>
          <span className={classes.bold}>From $136</span> / person
        </p>
      </section>
    </div>
  );
}
