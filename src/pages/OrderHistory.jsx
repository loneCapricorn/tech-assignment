import { useLoaderData } from "react-router-dom";
import OrderCard from "../components/OrderCard";

const OrderHistory = () => {
  const orders = useLoaderData();

  if (orders instanceof Error) {
    return (
      <main className="flex justify-center items-center mx-5 my-10 h-32">
        <h1 className="text-center font-montserrat">{orders.message}</h1>
      </main>
    );
  }

  return (
    <main>
      <ul className="flex flex-wrap gap-12 p-7">
        {orders.map((order) => (
          <OrderCard key={order.id} {...order} />
        ))}
      </ul>
    </main>
  );
};

export default OrderHistory;
