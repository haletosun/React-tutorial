import React from "react";
import logo from './logo.svg';
import './App.css';
import coffee from '/Users/haletosun/Desktop/my-app/src/coffee.jpg';

function Header(props) {
  console.log(props);
  return (
    <header>
      <h1> {props.name} coffeee houseee </h1>
    </header>
  );
}

function Main(props) {
  return (
    <section>
      <p>we serve the most delicious cakeee  {props.adjactive}</p>
      <img src={coffee} height={200} alt="photo" />
      <ul style={{
        textAlign: "left"
      }}>
        {props.dishes.map((dish) => (
          <li key={dish.id} >{dish.title}</li>
        ))}
      </ul>
    </section>
  );
}

function Footer(props) {
  return (
    <footer>
      <p>date: {props.year}  </p>
    </footer>
  );
}

const dishes = [
  "macoroni",
  "apple tie",
  "san sebastian",
  "miniso",
  "cheesecake",
];
const dishObjects = dishes.map((dish, i) => ({ id: i, title: dish }));


function App() {
  return (
    <>
      <Header name="cindy" />
      <Main adjactive="amazing food😍" dishes={dishObjects} />
      <Footer year={new Date().getFullYear()} />

    </>
  );
}

export default App;
