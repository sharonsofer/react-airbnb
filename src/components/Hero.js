import classes from "./Hero.module.css";

export default function Hero() {
  return (
    <section>
      <div className={classes.hero_photo} />
      <h1 className={classes.hero_header}>Online Experiences</h1>
      <p className={classes.hero_text}>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </section>
  );
}
