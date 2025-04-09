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
              className="w-64 bg-white shadow-sm rounded-[5px] p-12 space-y-3 relative overflow-hidden"
            >
              <div>
                <p className="text-sm text-gray-500">{appt.time}</p>
                <p className="text-lg font-semibold">{appt.patient}</p>
                <p className="text-sm text-gray-600">{appt.type}</p>
              </div>
  
              <span
                className={`inline-block px-3 py-1 text-sm rounded-full font-medium ${statusColor[appt.status]}`}
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
  