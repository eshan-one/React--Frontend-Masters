const Pizza = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("p", {}, props.description),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, {
      name: "The Pepperoni Pizza",
      description: "Mozerella Cheese Pepporoni",
    }),
    React.createElement(Pizza, {
      name: "The Peri Peri Pizza",
      description: "Peri Peri Sauce, paprika",
    }),
    React.createElement(Pizza, {
      name: "The Pineapple Pizza",
      description: "Pineapple slice with paprika sauce on top",
    }),
  ]);
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App));
