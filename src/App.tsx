import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./router";

const App = () => {
  return (
    // <AuthContext.Provider value={{ user, setUser }}>

    <RouterProvider router={router} />
    // </AuthContext.Provider>
  );
};

export default App;
