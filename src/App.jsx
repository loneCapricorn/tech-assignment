import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// hooks
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

// services
import { auth } from "./config/firebase-config.js";
import { getUserData } from "./services/user-services.js";
import Authenticated from './hoc/Authenticated'

// context
import AppContext from "./providers/AppContext.js";



// layouts and pages
import RootLayout from "./layouts/RootLayout";
import MainDashboard from "./pages/MainDashboard";
import NotFound from "./pages/NotFound";
import SignIn from "./pages/SignIn.jsx";
import OrderHistory from "./pages/OrderHistory";
import LandingPage from "./pages/LandingPage";
import SignUp from "./pages/SignUp.jsx";

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<LandingPage />} />
      <Route path="*" element={<NotFound />} />
      <Route path="dashboard" element={<Authenticated><MainDashboard /></Authenticated>} />
      <Route path="sign-in" element={<SignIn />} />
      <Route path="sign-up" element={<SignUp />} />
      <Route path="order-history" element={<Authenticated><OrderHistory /></Authenticated>} />
    </Route>
  )
);

const queryClient = new QueryClient();

const App = () => {
  const [context, setContext] = useState({ user: null, userData: null });
  const [user] = useAuthState(auth);

  // update the user in the app state to match the one retrieved from the hook above
  if (context.user !== user) {
    setContext({ user });
  }

  useEffect(() => {
    if (user === null) return;

    getUserData(user.uid)
      .then((snapshot) => {
        if (!snapshot.exists()) {
          throw new Error("Something went wrong!");
        }

        setContext({
          ...context,
          userData: snapshot.val()[Object.keys(snapshot.val())[0]],
        });
      })
      .catch((e) => alert(e.message));
  }, [user]);

  return (
    <QueryClientProvider client={queryClient}>
      <AppContext.Provider value={{ ...context, setContext }}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </QueryClientProvider>
  );
};

export default App;
