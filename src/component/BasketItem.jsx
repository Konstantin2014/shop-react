function BasketItem(props) {
  const { id, name, price, quantity } = props;

  return (
    <li className="collection-item ">
      {name} x {quantity} = {price}
      <span className="secondary-content ">
        <i class="material-icons blue-text basket-delete">close</i>
      </span>
    </li>
  );
}
export default BasketItem;
