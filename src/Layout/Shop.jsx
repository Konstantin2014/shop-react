import { useEffect, useState } from "react";
import { API_URL, API_KEY } from "../config";
import GoodsList from "../component/GoodsList";

import Preloader from "../component/Praloader";
import Cart from "../component/Cart";
import BasketList from "../component/BasketList";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoadind] = useState(true);
  const [order, setOrder] = useState([]);
  const [isBasketShow, setIsBasketShow] = useState(false);

  const addToBasket = (item) => {
    const itemIndex = order.findIndex((orderItem) => orderItem.id === item.id);

    if (itemIndex < 0) {
      const newItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return { ...orderItem, quantity: orderItem.quantity + 1 };
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);
    }
  };

  const removeFromBasket = (itemId) => {
    const newOrder = order.filter((el) => el.id !== itemId);
    setOrder(newOrder);
  };

  const handleBasketShow = () => {
    setIsBasketShow(!isBasketShow);
  };

  useEffect(function getGoods() {
    fetch(API_URL, { headers: { Authorization: API_KEY } })
      .then((response) => response.json())
      .then((data) => {
        data.featured && setGoods(data.featured);
        setLoadind(false);
      });
  }, []);

  return (
    <main className="container content">
      <Cart quantity={order.length} handleBasketShow={handleBasketShow} />
      {loading ? (
        <Preloader />
      ) : (
        <GoodsList goods={goods} addToBasket={addToBasket} />
      )}
      {isBasketShow && (
        <BasketList
          order={order}
          handleBasketShow={handleBasketShow}
          removeFromBasket={removeFromBasket}
        />
      )}
    </main>
  );
}
export default Shop;
