import { Outlet } from "react-router-dom";
import Header from "@/components/public-view/header";
import Footer from "@/components/shopping-view/footer";

function HomePage() {
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default HomePage
