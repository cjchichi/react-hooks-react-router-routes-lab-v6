/*

const routes = [
   
  ];

export default routes;
*/

import Home from "./pages/Home.jsx";
import Actors from "./pages/Actors.jsx";
import Directors from "./pages/Directors.jsx";
import Movie from "./pages/Movie.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

const routes = [
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/actors",
    element: <Actors />
  },
  {
    path: "/directors",
    element: <Directors />
  },
  {
    path: "/movie/:id",
    element: <Movie />
  }
];

export default routes;