import React, { ReactElement } from "react";
import NavBar from "./NavBarfolder/NavBar";
import Footer from "./Footer/Footer";

interface Props {
  children: ReactElement;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
          <main>{children}</main>
      <Footer />    
    </>
  );
};

export default Layout;
