import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import useScrollHeader from "../../util-hooks/useScrollHeader";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const isVisible = useScrollHeader();
    const favoritesCount = useSelector((state) => state.favorites?.favorites?.length);
  return (
    <header
      className={`${classes.header} ${isVisible ? classes.visible : classes.hidden}`}
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/" data-test="link-all-meetups">
              All Meetups
            </Link>
          </li>
          <li>
            <Link to="/new-meetup" data-test="link-new-meetup">
              Add New Meetup
            </Link>
          </li>
          <li>
            <Link to="/favorites" data-test="link-favorites">
              My Favorites
              <span className={classes.badge}>{favoritesCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
