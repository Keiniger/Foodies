import React from "react";
import classes from "../../css/MealsSummary.module.css";

export default function MealsSummary() {
  return (
    <section className={classes.summary}>
      <h2>Food delivery has never been so easy</h2>
      <p>
        Pick your favorite meal from our extensive catalog and enjoy the best
        food money can buy
      </p>
      <p>
        We ensure our ingredients are fresh and delicious, and that our
        deliveries are fast. If you don't get your meal in less than 30 minutes,
        we'll give you your money back!
      </p>
    </section>
  );
}
