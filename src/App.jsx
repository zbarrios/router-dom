import { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Details from "./Pages/Details";
import Profile from "./Pages/Profile";
import NotFound from "./Pages/NotFound";
import StandarLayout from "./Layouts/StandarLayout";
import DetailsLayouts from "./Layouts/DetailsLayouts";

const router = createBrowserRouter([
  {
    element: <StandarLayout> </StandarLayout>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/home", element: <Home></Home> },
      { path: "/profile", element: <Profile></Profile> },
    ],
  },
  { element: <DetailsLayouts></DetailsLayouts>,
    children: [
      { path: "/details", element: <Details></Details> },
      { path: "/details/:id/:name", element: <Details></Details> },
    ],
  },
  { path: "/*", element: <NotFound></NotFound> },
]);


function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
