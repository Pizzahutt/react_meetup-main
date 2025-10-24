import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import store from "./store";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
    <Provider store={store}>
      <Router>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar />
        <div data-test="app">
          <MainNavigation />
          <Layout>
            <Switch>
              <Route path="/" exact>
                <AllMeetupsPage />
              </Route>
              <Route path="/new-meetup">
                <NewMeetupsPage />
              </Route>
              <Route path="/favorites">
                <FavoritesPage />
              </Route>
            </Switch>
          </Layout>
        </div>
        <ToastContainer />
      </Router>
    </Provider>
  );
}

export default App;
