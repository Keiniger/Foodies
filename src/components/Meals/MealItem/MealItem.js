import { useContext } from "react";
import classes from "../../../css/MealItem.module.css";
import MealItemForm from "./MealitemForm";
import CartContext from "../../../store/cart-context";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);
  const price = "$" + meal.price.toFixed(2);

  function addToCartHandler(_amount) {
    cartCtx.addItem({
      id: meal.id,
      name: meal.name,
      amount: _amount,
      price: meal.price,
    });
  }

  return (
    <li className={classes.meal} key={meal.id}>
      <div>
        <h3>{meal.name}</h3>
        <div className={classes.description}>{meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
}
