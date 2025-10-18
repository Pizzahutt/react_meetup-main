import { useSelector } from "react-redux";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function FavoritesPage() {
  const favorites = useSelector((state) => state.favorites.favorites);

  if (favorites.length === 0) {
    return <p>You have no favorites yet. Start adding some!</p>;
  }

  return (
    <section>
      <h1>My Favorites</h1>
      <ul className={classes.list}>
        {favorites.map((meetup) => (
          <MeetupItem key={meetup.id} {...meetup} />
        ))}
      </ul>
    </section>
  );
}
