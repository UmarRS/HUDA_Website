import { useRouteError } from "react-router-dom";
import "../App.css";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <Navbar/>
      <Header/>
      <h1>Error 404</h1>
      <p>Page Not Found.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
