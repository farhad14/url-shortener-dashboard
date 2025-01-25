import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ element }: { element: React.ReactElement }) => {
  // if (!authStorage.getToken()) {
  //   return <Navigate to="/login" />;
  // }

  return element;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute element={<Home />} />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
