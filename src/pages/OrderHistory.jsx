import { useQuery } from "react-query";
import { getAllorders } from "../services/request-services";
import OrderCard from "../components/OrderCard";
import Loader from "../components/Loader";

const OrderHistory = () => {
  // const orders = useLoaderData();

  const { data: orders, isLoading, error } = useQuery("ordersData", getAllorders );

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return (
      <main className="flex justify-center items-center mx-5 my-10 h-32">
        <h1 className="text-center font-montserrat">{error.message}</h1>
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
