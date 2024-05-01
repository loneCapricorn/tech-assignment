import { get, ref } from "firebase/database";
import { db } from "../config/firebase-config.js";

const getLineChart = async () => {
  const lineChartReference = ref(db, "line-chart");
  const snapshot = await get(lineChartReference);

  return snapshot.val();
};

const getPieChart = async () => {
  const pieChartReference = ref(db, "pie-chart");
  const snapshot = await get(pieChartReference);

  return snapshot.val();
};

const getAllorders = async () => {
  const ordersReference = ref(db, "orders");
  const snapshot = await get(ordersReference);

  return snapshot.val();
};

const getLastFiveOrders = async () => {
  const ordersReference = ref(db, "orders");
  const snapshot = await get(ordersReference);
  const orders = snapshot.val();
  const lastFiveOrders = orders.slice(Math.max(orders.length - 5, 0));

  return lastFiveOrders;
};

export { getLineChart, getPieChart, getAllorders, getLastFiveOrders };
