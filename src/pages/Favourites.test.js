/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, within } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import userEvent from "@testing-library/user-event";
import favoritesReducer from "../store/favoritesSlice";
import FavoritesPage from "./Favorites";
import MeetupItem from "../components/meetups/MeetupItem";

const mockMeetup = {
  id: "m1",
  title: "Test Title",
  address: "123 Test Street",
  description: "This is a description.",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
};

function renderWithRedux(ui, { initialState, store = configureStore({ reducer: { favorites: favoritesReducer }, preloadedState: initialState }) } = {}) {
  return render(<Provider store={store}>{ui}</Provider>);
}
test("should add a meetup to favorites", async () => {
  renderWithRedux(<MeetupItem key={mockMeetup?.id} {...mockMeetup} />, { initialState: { favorites: { favorites: [] } } });
  const addButton = screen.getByRole("button", { name: /add to favorites/i });
  expect(addButton).toBeInTheDocument();
  
  userEvent.click(addButton);
  
  renderWithRedux(<FavoritesPage />, { initialState: { favorites: { favorites: [mockMeetup] } } });
  const favoritesSection = screen.getByRole("heading", { name: /my favorites/i }).closest("section");
  const removeButton = within(favoritesSection).getByRole("button", { name: /remove from favorites/i });
  expect(removeButton).toBeInTheDocument();
});

test("should remove a meetup from favorites", async () => {
  renderWithRedux(<MeetupItem key={mockMeetup?.id} {...mockMeetup} />, { initialState: { favorites: { favorites: [mockMeetup] } } });
  const removeButton = screen.getByRole("button", { name: /remove from favorites/i });
  expect(removeButton).toBeInTheDocument();

  userEvent.click(removeButton);

  renderWithRedux(<FavoritesPage />, { initialState: { favorites: { favorites: [] } } });
  const noFavoritesMessage = screen.getByText(/you have no favorites yet/i);
  expect(noFavoritesMessage).toBeInTheDocument();
});
