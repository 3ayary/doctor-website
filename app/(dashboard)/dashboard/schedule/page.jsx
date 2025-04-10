const SchedulePage = () => {
  const appointments = [
    {
      time: "09:00 AM",
      patient: "Mohamed Ali",
      type: "Checkup",
      status: "confirmed",
    },
    {
      time: "10:30 AM",
      patient: "Ahmed Hassan",
      type: "Follow-up",
      status: "pending",
    },
    {
      time: "12:00 PM",
      patient: "Sara Ibrahim",
      type: "Consultation",
      status: "cancelled",
    },
    {
      time: "01:00 PM",
      patient: "Omar Farouk",
      type: "Checkup",
      status: "confirmed",
    },
    {
      time: "02:30 PM",
      patient: "Laila Youssef",
      type: "Follow-up",
      status: "pending",
    },
    {
      time: "03:45 PM",
      patient: "Hassan Tarek",
      type: "Consultation",
      status: "cancelled",
    },
    {
      time: "09:00 AM",
      patient: "Mohamed Ali",
      type: "Checkup",
      status: "confirmed",
    },
    {
      time: "10:30 AM",
      patient: "Ahmed Hassan",
      type: "Follow-up",
      status: "pending",
    },
    {
      time: "12:00 PM",
      patient: "Sara Ibrahim",
      type: "Consultation",
      status: "cancelled",
    },
    {
      time: "01:00 PM",
      patient: "Omar Farouk",
      type: "Checkup",
      status: "confirmed",
    },
    {
      time: "02:30 PM",
      patient: "Laila Youssef",
      type: "Follow-up",
      status: "pending",
    },
    {
      time: "03:45 PM",
      patient: "Hassan Tarek",
      type: "Consultation",
      status: "cancelled",
    },
  ];

  const statusColor = {
    confirmed: "text-green-600 bg-green-100",
    pending: "text-yellow-600 bg-yellow-100",
    cancelled: "text-red-600 bg-red-100",
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <h2 className="text-2xl font-bold mb-6">Today's Appointments</h2>

      <ul className="grid grid-cols-4 gap-6">
        {appointments.map((appt, index) => (
          <li
            key={index}
            className="w-64 bg-white shadow-sm rounded-[5px] p-12 space-y-3  relative  "
          >
            <div className="w-8 h-8 text-white  content-center place-items-center cursor-pointer bg-[#002364] rounded-full absolute -right-4 -top-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm text-gray-500">{appt.time}</p>
              <p className="text-lg font-semibold">{appt.patient}</p>
              <p className="text-sm text-gray-600">{appt.type}</p>
            </div>

            <span
              className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${
                statusColor[appt.status]
              }`}
            >
              {appt.status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SchedulePage;
