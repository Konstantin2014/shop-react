function Cart(props) {
  const { quantity = 0 } = props;
  return (
    <div className="cart indigo darken-3 white-text">
      <i className="material-icons">shopping_cart</i>
      {quantity ? <span className="cart-quantity">{quantity}</span> : null}
    </div>
  );
}
export default Cart;
