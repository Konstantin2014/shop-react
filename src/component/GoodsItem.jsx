function GoodsItem(props) {
  const { description, name, price, full_background } = props;

  return (
    <div className="card">
      <div className="card-image">
        <img src={full_background} alt={name} />
        <span className="card-title">{name}</span>
      </div>
      <div className="card-content">
        <p>{description}</p>
      </div>
      <div className="card-action">
        <button className="btn">Купить</button>
        <span className="right">{price}</span>
      </div>
    </div>
  );
}
export default GoodsItem;
