import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setMeetups } from "../../store/meetupsSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../ui/Card";
import classes from "./NewMeetupForm.module.css";

export default function NewMeetupForm() {
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    address: "",
    description: "",
  });
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const meetups = useSelector((state) => state.meetups.meetups);

  function submitHandler(event) {
    event.preventDefault();
    if (!formData.title || !formData.image || !formData.address || !formData.description) {
      setError("All fields are required.");
      return;
    }
    const newMeetup = { ...formData, id: Date.now().toString() };
    dispatch(setMeetups([...meetups, newMeetup]));
    setFormData({ title: "", image: "", address: "", description: "" });
    setError("");
    toast.success("New meetup added successfully!");
  }

  function changeHandler(event) {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        {error && <p className={classes.error}>{error}</p>}
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input type="text" required id="title" value={formData.title} onChange={changeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input type="url" required id="image" value={formData.image} onChange={changeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input type="text" required id="address" value={formData.address} onChange={changeHandler} />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea id="description" required rows="5" value={formData.description} onChange={changeHandler}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
