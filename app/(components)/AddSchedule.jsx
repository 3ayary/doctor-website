const AddSchedule = () => {
  return (
    <div className="w-200 h-auto bg-white shadow-sm rounded-[5px] p-12 space-y-4 relative overflow-hidden">
      <div className="w-24 h-24 bg-[#002364] rounded-full absolute -right-5 -top-7"></div>

      <h1 className="font-bold text-xl mt-[12%]">Book Appointment</h1>
      <p className="text-sm text-zinc-500 leading-6">Control your Schedule</p>

      <form className="space-y-3">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-zinc-300 rounded-[5px] "
        />
        <input
          type="time"
          className="w-full px-3 py-2 border border-zinc-300 rounded-[5px] "
        />
        <select
          id="country"
          name="country"
          className="mt-1 block w-full rounded-md border border-gray-300 bg-white p-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        >
          <option>Checkup</option>
          <option>Follow-up</option>
          <option>Consultation</option>
        </select>
        <button
          type="submit"
          className="w-30 bg-[#002364] text-white py-2 rounded-[5px] hover:bg-[#001c4f] transition"
        >
          Add
        </button>
      </form>
    </div>
  );
};

export default AddSchedule;
