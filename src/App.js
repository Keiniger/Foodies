import { useState } from "react";
import Meals from "./components/Meals/Meals";
import Header from "./components/Layout/Header";
import Cart from "./components/Cart/Cart";
import CartProvider from './store/CartProvider';

export default function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  function showCartHandler(){
    setCartIsShown(true);
  }

  function hideCartHandler(){
    setCartIsShown(false);
  }

  return (
    <CartProvider>
      {cartIsShown && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}
