/* eslint-disable testing-library/no-debugging-utils */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import favoritesReducer from "../../store/favoritesSlice";
import MeetupItem from "./MeetupItem";

const mockMeetup = {
  id: "m1",
  title: "Test Title",
  address: "123 Test Street",
  description: "This is a test.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
};

function renderWithRedux(ui, { initialState, store = configureStore({ reducer: { favorites: favoritesReducer }, preloadedState: initialState }) } = {}) {
  return render(<Provider store={store}>{ui}</Provider>);
}

test("<MeetupItem/> renders without crashing", () => {
  renderWithRedux(<MeetupItem {...mockMeetup} />, { initialState: { favorites: { favorites: [] } } });
  const meetupTitles = screen.getAllByText(/test title/i);
  expect(meetupTitles).toHaveLength(1);
});

test("should toggle favorite status", () => {
  renderWithRedux(<MeetupItem {...mockMeetup} />, { initialState: { favorites: { favorites: [] } } });

  const addButton = screen.getByRole("button", { name: /add to favorites/i });
  expect(addButton).toBeInTheDocument();

  addButton.click();

  const removeButton = screen.getByRole("button", { name: /remove from favorites/i });
  expect(removeButton).toBeInTheDocument();
});
