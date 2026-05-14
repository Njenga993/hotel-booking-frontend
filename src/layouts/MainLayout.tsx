import type { ReactNode } from "react";
import Navbar from "../components/navbar/Navbar";

interface MainLayoutProps{
  children:ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
     <Navbar />
      {children}
    </>
  );
};

export default MainLayout;