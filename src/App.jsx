import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import MainDashboard from "./pages/MainDashboard";
import LoginPage from "./pages/LoginPage";
import OrderHistory from "./pages/OrderHistory";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<MainDashboard />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="order-history" element={<OrderHistory />} />
    </Route>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
