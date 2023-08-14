import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Navigation, Trending } from "./components/";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <AllRoutes />
      <Trending />
    </div>
  );
}
