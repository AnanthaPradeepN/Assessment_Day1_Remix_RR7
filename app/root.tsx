import { Outlet } from "react-router";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainBody from "./components/MainBody";
import './app.css';


export function Root() {
  return (
    <div>
      <Header />
      <main>
        <MainBody />
      </main>
      <Footer />
    </div>
  );
}
