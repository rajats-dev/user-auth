import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Details from "./pages/Details";
import CompanyInfo from "./components/CompanyInfo";
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
          to="/moviesdetails"
          className="mx-2 p-2 bg-orange-500 text-white rounded-lg"
        >
          Movies
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
          path: "/moviesdetails",
          element: <Details />,
        },
        {
          path: "/companyinfo",
          element: <CompanyInfo />,
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
