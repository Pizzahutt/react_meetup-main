import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useFetch } from "../util-hooks/useFetch";
import { setMeetups } from "../store/meetupsSlice.js";
import MeetupItem from "../components/meetups/MeetupItem";
import classes from "./../components/meetups/MeetupList.module.css";

export default function AllMeetupsPage() {
  const dispatch = useDispatch();
  const meetups = useSelector((state) => state.meetups.meetups);
  const { data } = useFetch({
    url: "/data.json",
  });

  useEffect(() => {
    if (data && meetups.length === 0) {
      dispatch(setMeetups(data));
    }
  }, [data, dispatch, meetups.length]);

  if (!meetups.length) return <p>Loading...</p>;

  return (
    <section>
      <h1>All Meetups</h1>
      <ul className={classes.list}>
        {meetups.map((meetup) => (
          <MeetupItem key={meetup.id} {...meetup} />
        ))}
      </ul>
    </section>
  );
}
