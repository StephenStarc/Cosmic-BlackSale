import { Children } from "react";
import Footer from "../footer/Footer";
import Navbar from "../navbar/Navbar";

export default function Layout({children}){
    return (
        <div>
      <Navbar />
        <div className="content">
            {children}
        </div>
        <Footer />
        </div>
    )
}