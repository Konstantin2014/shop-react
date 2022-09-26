import { useEffect, useState } from "react";
import { API_URL, APY_KEY } from "../config";
import GoodsList from "../component/GoodsList";

import Preloader from "../component/Praloader";

function Shop() {
  const [goods, setGoods] = useState([]);
  const [loading, setLoadind] = useState(true);

  useEffect(function getGoods() {
    fetch(API_URL, {
      headers: {
        Authorization: APY_KEY,
      },
    })
      .then((response) => {
        response.json();
      })
      .then((date) => {
        date.shop && setGoods(date.shop);
        setLoadind(false);
      });
  }, []);

  return (
    <main className="container content">
      {loading ? <Preloader /> : <GoodsList goods={goods} />}
    </main>
  );
}
export default Shop;
