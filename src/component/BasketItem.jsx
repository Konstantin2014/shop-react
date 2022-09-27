function BasketItem(props) {
  const {
    id,
    name,
    price,
    quantity,
    removeFromBasket = Function.prototype,
    incQuantity = Function.prototype,
    decQuantity = Function.prototype,
  } = props;

  return (
    <li className="collection-item ">
      {name}{" "}
      <i
        class="material-icons blue-text basket-delete basket-quantity"
        onClick={() => decQuantity(id)}
      >
        remove
      </i>{" "}
      x {quantity}{" "}
      <i
        class="material-icons blue-text basket-delete basket-quantity"
        onClick={() => incQuantity(id)}
      >
        add
      </i>{" "}
      = {price * quantity} грн.
      <span className="secondary-content" onClick={() => removeFromBasket(id)}>
        <i class="material-icons blue-text basket-delete">close</i>
      </span>
    </li>
  );
}
export default BasketItem;
