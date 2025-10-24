import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import meetupsReducer from "../../store/meetupsSlice";
import NewMeetupForm from "./NewMeetupForm";
import { toast } from "react-toastify";

jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
  },
}));

function renderWithRedux(ui, { initialState, store = configureStore({ reducer: { meetups: meetupsReducer }, preloadedState: initialState }) } = {}) {
  return render(<Provider store={store}>{ui}</Provider>);
}

describe("NewMeetupForm Component", () => {
  test("renders the form correctly", () => {
    renderWithRedux(<NewMeetupForm />, { initialState: { meetups: { meetups: [] } } });
    expect(screen.getByLabelText(/Meetup Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Meetup Image/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Description/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Add Meetup/i })).toBeInTheDocument();
  });

  test("shows error message when fields are empty", async () => {
    renderWithRedux(<NewMeetupForm />, { initialState: { meetups: { meetups: [] } } });

    await userEvent.click(screen.getByRole("button", { name: /Add Meetup/i }));

    expect(screen.getByText(/All fields are required/i)).toBeInTheDocument();
  });

  test("dispatches setMeetups action and shows toast on successful submission", async () => {
    const initialState = { meetups: { meetups: [] } };
    const store = configureStore({ reducer: { meetups: meetupsReducer }, preloadedState: initialState });

    renderWithRedux(<NewMeetupForm />, { store });

    async function fillForm() {
      await userEvent.type(screen.getByLabelText(/Meetup Title/i), "Test Meetup");
      await userEvent.type(screen.getByLabelText(/Meetup Image/i), "https://example.com/image.jpg");
      await userEvent.type(screen.getByLabelText(/Address/i), "123 Test Street");
      await userEvent.type(screen.getByLabelText(/Description/i), "This is a test description.");
    }

    await fillForm();

    await userEvent.click(screen.getByRole("button", { name: /Add Meetup/i }));

    expect(store.getState().meetups.meetups).toHaveLength(1);
    expect(store.getState().meetups.meetups[0]).toMatchObject({
      title: "Test Meetup",
      image: "https://example.com/image.jpg",
      address: "123 Test Street",
      description: "This is a test description.",
    });

    expect(toast.success).toHaveBeenCalledWith("New meetup added successfully!");
  });
});