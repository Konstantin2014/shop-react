import GoodsItem from "./GoodsItem";

function GoodsList(props) {
  console.log(props);
  const { goods = [] } = props;

  if (!goods.length) {
    <h3>Ничего нет</h3>;
  }

  return (
    <div className="goods">
      {goods.map((item) => (
        <GoodsItem key={item.id} {...item} />
      ))}
    </div>
  );
}
export default GoodsList;
