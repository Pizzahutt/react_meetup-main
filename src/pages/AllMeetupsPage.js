import { useFetch } from "../util-hooks/useFetch";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {data.map((meetup) => (
          <MeetupItem key={meetup.id} {...meetup} />
        ))}
      </ul>
    </section>
  );
}
