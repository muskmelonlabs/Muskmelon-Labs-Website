import { Switch, Route, Router as WouterRouter } from "wouter";
import BrandBook from "@/pages/BrandBook";

function App() {
  return (
    <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
      <Switch>
        <Route path="/" component={BrandBook} />
        <Route path="*" component={BrandBook} />
      </Switch>
    </WouterRouter>
  );
}

export default App;
