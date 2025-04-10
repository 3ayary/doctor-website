'use client'
import data from "../../../Data/api.json"
import Card from "@/app/(components)/Card";
import DashboardInput from "@/app/(components)/dashboardInput";
import { usePathname } from "next/navigation";

const page = () => {

    const path = usePathname()
   const apiData = data.homecontent;
    return (
    <div className="flex justify-center flex-col pl-[13%]  items-center">
        <h1 className="flex self-start m-5 text-3xl text-gray-700 font-bold">Edit Site Content</h1>

        <DashboardInput />

        <ul className="flex flex-wrap justify-center my-[3%] gap-6">

{apiData.map((data, index) => (
  
  <li key={index}>
    <Card title={data.title} content={data.content} delete={path.startsWith('/dashboard')&&true} />
  </li>

))}
</ul>
    </div>
  )
}

export default page