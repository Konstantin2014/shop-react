function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
  } = props;

  return (
    <li className="collection-item ">
      {name} x {quantity} = {price * quantity} грн.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i class="material-icons blue-text basket-delete">close</i>
      </span>
    </li>
  );
}
export default BasketItem;
