import { createRoot } from "react-dom/client";
import Pizza from "./Pizza";

const App = () => {
  return (
    <div>
      <h1>Padre Gino's - Order Now</h1>
      <Pizza name="Pepperoni" description="pep, cheese, chilly" />
      <Pizza
        name="Margheritta"
        description="loaded cheese, tomaotes, and stuff"
      />
      <Pizza name="Farmouse" description="veggies, jalapenos, cheese volcano" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
