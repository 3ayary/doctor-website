import DashboardCards from "@/app/(components)/dashboardCards";
const page = () => {
  return (
    <div className="flex flex-col h-full bg-gray-100">
      <h1 className="flex self-start  m-5  text-3xl  text-gray-700 font-bold">
        Hi, Welcome Back
      </h1>
      <div className="flex flex-wrap gap-20 justify-center h-[100%]  mt-10">
        <DashboardCards title="Today's Appointments" content="" time="12" />
        <DashboardCards title="New Patients" content="" time="5" subContent="This Week" />
        <DashboardCards title="Clinic Status" content="Open" time="" />
        <DashboardCards title="Today's Revenue" time="" subContent="$1,250" />



      </div>
<div>
  
</div>

    </div>
  );
};

export default page;
