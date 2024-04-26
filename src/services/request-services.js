import { orderHistoryURL } from "../constants";

const getLineChartURL = (timestamp) =>
  `https://0wzm4.wiremockapi.cloud/linechart/startdate/${timestamp}/enddate/${timestamp}`;

const getPieeChartURL = (timestamp) =>
  `https://0wzm4.wiremockapi.cloud/piechart/startdate/${timestamp}/enddate/${timestamp}`;

const loadOrderHistory = async () => {
  return fetch(orderHistoryURL)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Failed to fetch order history!");
      }
      return res.json();
    })
    .then((data) => data.payload)
    .catch((err) => err);
};

export { loadOrderHistory };
