import Navbar from "./Navbar";
import Home from "./Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TrackUser from "./TrackUser";
import MoreInfo from "./MoreInfo";
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/track">
              <TrackUser />
            </Route>
            <Route path="/users/:id">
              <MoreInfo />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;