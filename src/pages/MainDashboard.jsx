// hooks
import { useQueries } from "react-query";

// services
import {
  getLineChart,
  getPieChart,
  getLastFiveOrders,
} from "../services/request-services.js";

// library for unique id
import { v4 as uniqueId } from "uuid";

import Loader from "../components/Loader";
import OrderCard from "../components/OrderCard";
import LineChartCard from "../components/LineChartCard.jsx";
import PieChartCard from "../components/PieChartCard.jsx";

const MainDashboard = () => {
  const results = useQueries([
    { queryKey: "lineChart", queryFn: getLineChart },
    { queryKey: "pieChart", queryFn: getPieChart },
    { queryKey: "lastFiveOrders", queryFn: getLastFiveOrders },
  ]);

  const [
    { data: lineChartData, isLoading: lineChartLoading, error: lineChartError },
    { data: pieChartData, isLoading: pieChartLoading, error: pieChartError },
    {
      data: lastordersData,
      isLoading: lastOrdersLoading,
      error: lastOrdersError,
    },
  ] = results;

  if (lineChartLoading || pieChartLoading || lastOrdersLoading) {
    return <Loader />;
  }

  if (lineChartError || pieChartError || lastOrdersError) {
    return (
      <main className="flex justify-center items-center mx-5 my-10 h-32">
        <h1 className="text-center font-montserrat">
          {lineChartError
            ? lineChartError.message
            : pieChartError
            ? pieChartError.message
            : lastOrdersError.message}
        </h1>
      </main>
    );
  }

  return (
    <main className="mt-10">
      <div>
        <h2 className="pl-5 font-palanquin font-semibold underline text-[#f59e0b]">
          Line Chart
        </h2>
        <ul className="flex flex-wrap gap-12 p-7">
          {lineChartData.map((item) => (
            <LineChartCard key={uniqueId()} {...item} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="pl-5 font-palanquin font-semibold underline text-[#f59e0b]">
          Pie Chart
        </h2>
        <ul className="flex flex-wrap gap-12 p-7">
          {pieChartData.map((item) => (
            <PieChartCard key={uniqueId()} {...item} />
          ))}
        </ul>
      </div>
      <div>
        <h2 className="pl-5 font-palanquin font-semibold underline text-[#f59e0b]">
          Last orders
        </h2>
        <ul className="flex flex-wrap gap-12 p-7">
          {lastordersData.map((order) => (
            <OrderCard key={order.id} {...order} />
          ))}
        </ul>
      </div>
    </main>
  );
};

export default MainDashboard;
