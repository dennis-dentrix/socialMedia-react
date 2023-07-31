import { AllRoutes } from "./AllRoutes/AllRoutes";
import { Navigation } from "./components/Navigation";
import "./App.css";

export default function App() {
  return (
    <div className="app">
      <Navigation />
      <AllRoutes />
    </div>
  );
}
