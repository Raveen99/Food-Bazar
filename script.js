import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import {
  Outlet,
  createBrowserRouter,
  RouterProvider,
  useLocation,
} from "react-router-dom";
import Search from "./src/pages/Search";
import ResMenu from "./src/pages/ResMenu";
import Cart from "./src/pages/Cart";
import Footer from "./src/components/Footer";
import { Provider } from "react-redux";
import appStore from "./store/appStore";
import Collections from "./src/components/Collections";
import Help from "./src/pages/Help";
import Offers from "./src/pages/Offers";

const AppComponent = () => {
  const location = useLocation();
  const isCartPage = location.pathname === "/cart";
  return (
    <Provider store={appStore}>
      <Header />
      <div className="w-full h-full ">
        <Outlet />
      </div>
      {!isCartPage && <Footer />}
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppComponent />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/restaurant/:resId",
        element: <ResMenu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/collections/:id",
        element: <Collections />,
      },
      {
        path: "/help",
        element: <Help />,
      },
      {
        path: "/offers",
        element: <Offers />,
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
