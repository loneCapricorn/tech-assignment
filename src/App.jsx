import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query';

// layouts and pages
import RootLayout from "./layouts/RootLayout";
import MainDashboard from "./pages/MainDashboard";
import NotFound from "./pages/NotFound";
import LoginPage from "./pages/LoginPage";
import OrderHistory from "./pages/OrderHistory";
import LandingPage from "./pages/LandingPage";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="dashboard" element={<MainDashboard />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="order-history" element={<OrderHistory />} />
    </Route>
  )
);

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
};

export default App;
