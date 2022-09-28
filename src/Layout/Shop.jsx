import { useContext, useEffect } from "react";
import { API_URL, API_KEY } from "../config";
import GoodsList from "../component/GoodsList";

import Preloader from "../component/Praloader";
import Cart from "../component/Cart";
import BasketList from "../component/BasketList";
import Alert from "../component/Alert";
import { ShopContext } from "../component/context";

function Shop() {
  const { loading, order, isBasketShow, alertName, setGoods } =
    useContext(ShopContext);

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        setGoods(data.featured);
      }); // eslint-disable-next-line
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} />
      {loading ? <Preloader /> : <GoodsList />}
      {isBasketShow && <BasketList />}
      {alertName && <Alert />}
    </main>
  );
}
export default Shop;
