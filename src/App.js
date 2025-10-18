import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupsPage from "./pages/NewMeetup";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";

function App() {
  return (
    <Router>
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
    </Router>
  );
}

export default App;
