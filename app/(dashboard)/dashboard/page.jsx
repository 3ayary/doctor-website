import DashboardCards from "@/app/(components)/dashboardCards";
import DashboardInput from "@/app/(components)/dashboardInput";
const page = () => {
  return (
    <div className="flex flex-col h-fit bg-gray-100 pl-[13%] pr-[40px]">
      <h1 className="flex self-start m-5 text-3xl text-gray-700 font-bold">
        Hi, Welcome Back
      </h1>
      <div className="flex flex-wrap gap-10 justify-center mt-10">
        <DashboardCards title="Today's Appointments" content="" time="12" />
        <DashboardCards
          title="New Patients"
          content=""
          time="5"
          subContent="This Week"
        />
        <DashboardCards title="Clinic Status" content="Open" time="" />
        <DashboardCards title="Today's Revenue" time="" subContent="$1,250" />
      </div>

      <div className="flex flex-col items-center gap-10 justify-center my-10">
        <h1 className=" m-5 text-3xl text-gray-700 font-bold">
          Add Card to the Home
        </h1>

        <DashboardInput />
      </div>
    </div>
  );
};

export default page;
