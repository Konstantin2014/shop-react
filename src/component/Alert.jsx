import { useContext, useEffect } from "react";
import { ShopContext } from "./context";

function Alert() {
  const { alertName: name = "", closeAlert = Function.prototype } =
    useContext(ShopContext);

  useEffect(() => {
    const tomerId = setTimeout(closeAlert, 3000);

    return () => {
      clearTimeout(tomerId);
    };
    //eslint-disable-next-line
  }, [name]);

  return (
    <div id="toast-container">
      <div className="toast">{name} добавлен в корзину</div>
    </div>
  );
}
export default Alert;
