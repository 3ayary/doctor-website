
import SideBar from "@/app/(components)/SideBar";

export default function PageLayout({ children }) {
  return (
  
      <div className="flex flex-row w-full  ">
         <SideBar/>
        <div className="flex flex-col w-[100%] justify-around h-screen">
        {children}
        </div>
        </div>
   
  );
}
