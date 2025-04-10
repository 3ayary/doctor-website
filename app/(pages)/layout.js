import Navbar from "../(components)/Navbar";
import Footer from "../(components)/Footer";

export default function PageLayout({ children }) {
  return (
    <div>
      
         <Navbar/>
        {children}
        <Footer/>
      
    </div>
  );
}
