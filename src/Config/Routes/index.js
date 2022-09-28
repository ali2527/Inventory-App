import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "../../Views/Dashboard";
import Signin from "../../Views/SignIn";


const router = createBrowserRouter([
  {
    path: "/",
    element: (<Dashboard/>),
  },
  {
    path: "signin",
    element: <Signin/>,
  },
]);


function MainRoute() {
  return (
    // set up routes for dashboard and signin
    <RouterProvider router={router} />
  );
}

export default MainRoute