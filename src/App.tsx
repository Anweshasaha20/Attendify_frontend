// import { Button } from "@/components/ui/button";
import Login from "./pages/Login";
import Signup from "./pages/SignUp";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import "./App.css";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
