import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Details from "./pages/Details";
import {
  Link,
  Outlet,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";

function App() {
  const Layout = () => (
    <>
      <header className="flex justify-center">
        <Link to="/" className="mx-2 p-2 bg-red-500 text-white rounded-lg">
          SignUp
        </Link>
        <Link
          to="/login"
          className="mx-2 p-2 bg-green-500 text-white rounded-lg"
        >
          LogIn
        </Link>
        <Link
          to="/companyinfo"
          className="mx-2 p-2 bg-blue-500 text-white rounded-lg"
        >
          Company Info
        </Link>
      </header>
      <Outlet />
    </>
  );

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <SignUp />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/details",
          element: <Details />,
        },
        {
          path: "/companyinfo",
          element: <Details />,
        },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
