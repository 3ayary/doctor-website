const DashboardInput = () => {
  return (
    <div className="w-200 h-auto bg-white shadow-sm rounded-[5px] p-12 space-y-4 relative overflow-hidden">
    <div className="w-24 h-24 bg-[#002364] rounded-full absolute -right-5 -top-7"></div>
  
    <h1 className="font-bold text-xl mt-[12%]">Contact Us</h1>
    <p className="text-sm text-zinc-500 leading-6">
      Please fill in the form below and we'll get back to you.
    </p>
  
    <form className="space-y-3">
      <input
        type="text"
        placeholder="Add Title"
        className="w-full px-3 py-2 border border-zinc-300 rounded-[5px] "
      />
    
      <input
        placeholder="Add Content"
        className="w-full px-3 py-2 border border-zinc-300 rounded-[5px] h-24  "
      />
      <button
        type="submit"
        className="w-30 bg-[#002364] text-white py-2 rounded-[5px] hover:bg-[#001c4f] transition"
      >
        Add Card
      </button>
    </form>
  </div>
  )  
}

export default DashboardInput