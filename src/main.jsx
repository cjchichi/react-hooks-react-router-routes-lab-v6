/*
import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render();
*/

import NavBar from "./NavBar";

function Home() {
  return (
    <>
      <header>
        <NavBar />
        <h1>Home Page</h1>
      </header>
      <main>
        <p>Welcome to our movie database!</p>
      </main>
    </>
  );
};

export default Home;
