import { Route, Switch } from "react-router-dom";

import Layout from "./components/layout/layout/Layout";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetUpsPage from "./pages/NewMeetUps";

function App() {
  return (
    <>
      <Layout>

        <Switch>
          <Route path="/" exact>
            <AllMeetUpsPage />
          </Route>

          <Route path="/new-meetup">
            <NewMeetUpsPage />
          </Route>

          <Route path="/favorites">
            <FavoritesPage />
          </Route>
          <Route path="*">
            <h1>Página não existe!</h1>
          </Route>
        </Switch>
        
      </Layout>
    </>
  );
}

export default App;
