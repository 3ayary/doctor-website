
import SideBar from "@/app/(components)/SideBar";

export default function PageLayout({ children }) {
  return (
  
      <div className="flex flex-row w-full h-screen ">
         <SideBar/>
        <div className="flex flex-col w-full h-screen">
        {children}
        </div>
        </div>
   
  );
}
