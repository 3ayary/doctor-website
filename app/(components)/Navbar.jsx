const Navbar = () => {
  return (
    <div className="flex sticky top-0 z-50 justify-between items-center bg-white shadow-md p-4 ">
      <img src="logo.png" className="w-[50px] h-[50px]" />

      <div className="space-x-4">
        <button className="inline-flex items-center px-6 py-3 font-medium rounded-md shadow-sm cursor-pointer text-white bg-[#5271ff] hover:bg-blue-700">
          Home
        </button>

        <button className="inline-flex items-center px-6 py-3 font-medium rounded-md shadow-sm cursor-pointer text-white bg-[#5271ff] hover:bg-blue-700">
          About
        </button>

        <button className="inline-flex items-center px-6 py-3 font-medium rounded-md shadow-sm cursor-pointer text-white bg-[#5271ff] hover:bg-blue-700">
          Contact
        </button>
      </div>
    </div>
  );
};

export default Navbar;
