import { Outlet } from "react-router";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import LeftAside from "../Components/HomeLayout/LeftAside";
import RightAside from "../Components/HomeLayout/RightAside";
import LatestNews from "../Components/LatestNews/LatestNews";
import NavBar from "../Components/NavBar/NavBar";

const Root = () => {
  return (
    <>
      {/* Header Start  */}
      <header>
        <Header />
        {/* Latest News */}
        <section className="w-11/12 mx-auto ">
          <LatestNews />
        </section>

        {/* Navbar */}
        <nav className="w-11/12 mx-auto ">
          <NavBar />
        </nav>
      </header>
      {/* Header End */}
      {/* *:border */}
      <main className="w-11/12 mx-auto grid grid-cols-12  gap-6">
        <aside className="col-span-3">
          <LeftAside></LeftAside>
        </aside>
        <section className="main-section col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightAside></RightAside>
        </aside>
      </main>

      {/* Footer Start*/}
      <footer>
        <Footer />
      </footer>
      {/* Footer End*/}
    </>
  );
};

export default Root;
