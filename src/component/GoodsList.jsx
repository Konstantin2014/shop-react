import { useContext } from "react";
import { ShopContext } from "./context";
import GoodsItem from "./GoodsItem";

function GoodsList() {
  const { goods = [] } = useContext(ShopContext);

  if (!goods.length) {
    <h3>Ничего ненайдено</h3>;
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
