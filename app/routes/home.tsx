import Header from "../components/Header";
import MainBody from "../components/MainBody";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

export default function Home() {
  return (
    <>
      <Header />
      <Outlet />
      <MainBody />
      <Footer />
    </>
  );
}
