import classes from "./Navbar.module.css";

export default function Navbar() {
  return (
    <nav className="container">
      <div className={classes.nav_logo} />
    </nav>
  );
}
