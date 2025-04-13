import AddSchedule from "@/app/(components)/AddSchedule"
const page = () => {
  return (
    <div className="flex flex-col h-screen">

      <div className="flex flex-col items-center gap-10 justify-center my-10">
        <h1 className=" m-5 text-3xl text-gray-700 font-bold">
        Book Appointment
        </h1>

      <AddSchedule/>
        
      </div>
    </div>
  )
}

export default page