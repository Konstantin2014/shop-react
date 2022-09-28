import { useContext } from "react";
import BasketItem from "./BasketItem";
import { ShopContext } from "./context";

function BasketList() {
  const { order = [], handleBasketShow = Function.prototype } =
    useContext(ShopContext);

  const totalPrice = order.reduce((sum, el) => {
    return sum + el.price * el.quantity;
  }, 0);

  return (
    <ul className="collection basket-list">
      <li className="collection-item active indigo darken-1">Корзина</li>
      {order.length ? (
        order.map((item) => <BasketItem key={item.id} {...item} />)
      ) : (
        <li className="collection-item">Корзина пуста</li>
      )}
      <li className="collection-item active indigo darken-1">
        Общая сумма: {totalPrice} грн.
        <button className="secondary-content btn-small indigo lighten-5 black-text">
          Заказать
        </button>
      </li>
      <i className="material-icons basket-close" onClick={handleBasketShow}>
        close
      </i>
    </ul>
  );
}
export default BasketList;
