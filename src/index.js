import React from "react";
import ReactDOM from "react-dom/client";
import image1 from "./pizzas/focaccia.jpg";
import image2 from "./pizzas/funghi.jpg";
import image3 from "./pizzas/margherita.jpg";
import image4 from "./pizzas/prosciutto.jpg";
import image5 from "./pizzas/salamino.jpg";
import image6 from "./pizzas/spinaci.jpg";
import "./index.css";
/* pizzaa data*/
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: `${image1}`,
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: `${image2}`,
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: `${image3}`,
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: `${image4}`,
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: `${image5}`,
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: `${image6}`,
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style = { color: "red", fontSize: "32px", textTransform: "uppercase" };

  const style = {};

  return (
    <header className="header footer">
      <h1 style={style}>FAST React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <React.Fragment>
          <p>
            Authrntic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic , all delicious
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </React.Fragment>
      ) : (
        <p>We're still working on our menu. please come back later :</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.n3ame} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closedHour = 22;
  const isOpen = hour >= openHour && hour <= closedHour;
  console.log(isOpen);

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHour={closedHour} openHour={openHour} />
      ) : (
        <p>
          We're happy to welcome you between {closedHour}:00 and {closedHour}
          :00.
        </p>
      )}
    </footer>
  );
  // return React.createElement("footer", null, "We're currently open!");
}

function Order({ closedHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're open from {openHour}:00 to {closedHour}:00. come to visit us or
        order online
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
<button className="btn">Order</button>;
root.render(<App />);
