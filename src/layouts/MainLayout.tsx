import type { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

interface MainLayoutProps{
  children:ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
     <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;