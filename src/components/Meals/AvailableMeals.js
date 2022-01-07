import Card from "../UI/Card";
import React from "react";
import MealItem from "./MealItem/MealItem";
import classes from "../../css/AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Carbonara",
    description: "An italian classic",
    price: 8.99,
  },
  {
    id: "m2",
    name: "Neapolitan pizza",
    description: "Grandma's recipe",
    price: 10.50,
  },
  {
    id: "m3",
    name: "Gelato al cioccolato",
    description: "Delicious dessert",
    price: 5.50,
  },
  {
    id: "m4",
    name: "Lasagna",
    description: "Garfield's dream",
    price: 6.99,
  },
];

export default function AvailableMeals() {
  const mealsList = DUMMY_MEALS.map((meal) => {
    return <MealItem meal={meal} key={meal.id}  />;
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}
