const page = () => {
  return(
    <div className="flex flex-col h-screen p-5"> 
    <h1 className="self-center font-bold text-5xl mb-5">Contact Us</h1>

    <div className="w-200 h-auto bg-white shadow-sm rounded-[5px] p-12 space-y-4 relative overflow-hidden self-center">
      <div className="w-24 h-24 bg-[#002364] rounded-full absolute -right-5 -top-7 "></div>

     
     

      <form className="space-y-3 mt-7">
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-zinc-300 rounded-[5px] "
        />
       <input
          type="text"
          placeholder="email"
          className="w-full px-3 py-2 border border-zinc-300 rounded-[5px] "
        />
         <input
          type="text"
          placeholder="phone"
          className="w-full px-3 py-2 border border-zinc-300 rounded-[5px] "
        />
         <input
          type="text"
          placeholder="subject"
          className="w-full px-3 py-2 border border-zinc-300 rounded-[5px] "
        />
         <input
          type="text"
          placeholder="Message"
          className="w-full h-30 px-3 py-2 border border-zinc-300 rounded-[5px] "
        />
       
        <button
          className="w-30 bg-[#002364] text-white py-2 rounded-[5px] hover:bg-[#001c4f] "
        >
          Send Message
        </button>
      </form>
    </div>
    
  </div>
  )
}
export default page