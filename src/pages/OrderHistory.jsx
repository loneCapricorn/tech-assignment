import { useLoaderData } from "react-router-dom";
import OrderCard from "../components/OrderCard";

const OrderHistory = () => {
  const orders = useLoaderData();

  if (orders instanceof Error) {
    return <h1 className="text-center font-montserrat">{orders.message}</h1>;
  }

  return (
    <ul className="flex flex-wrap gap-12 p-7">
      {orders.map((order) => (
        <OrderCard key={order.id} {...order} />
      ))}
    </ul>
  );
};

export default OrderHistory;
