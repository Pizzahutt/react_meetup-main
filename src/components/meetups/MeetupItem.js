import { useSelector, useDispatch } from "react-redux";
import { addFavorite, removeFavorite } from "../../store/favoritesSlice";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function MeetupItem({ id, title, address, description, image }) {
  const favorites = useSelector((state) => state.favorites.favorites);
  const dispatch = useDispatch();

  const isFavorite = favorites.some((meetup) => meetup.id === id);

  function toggleFavoriteStatusHandler() {
    if (isFavorite) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite({ id, title, address, description, image }));
    }
  }

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title} />
        </div>
        <div className={classes.content}>
          <h3 data-testid="meetup-title">{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
        </div>
      </Card>
    </li>
  );
}
