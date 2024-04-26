import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import MainDashboard from "./pages/MainDashboard";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import OrderHistory from "./pages/OrderHistory";
import { loadOrderHistory } from "./services/request-services";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainDashboard />} />
      <Route path="*" element={<NotFound />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="order-history" element={<OrderHistory />} loader={loadOrderHistory} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
