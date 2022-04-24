import { Route, Switch } from "react-router-dom";
import Cards from "./Cards";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/Cards" component={Cards} />
      </Switch>
    </div>
  );
}

export default App;
