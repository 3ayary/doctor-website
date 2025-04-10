import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex sticky flex-col top-0 z-50 justify-between items-center bg-white shadow-md p-4  lg:flex-row  ">
      <img src="/logo.png" className="w-[50px] h-[50px]" />

      <div className="space-x-4 m-3">
      <Link href="/">
        <button className="inline-flex items-center px-6 py-3 font-medium rounded-md shadow-sm cursor-pointer text-white bg-[#5271ff] hover:bg-blue-700">
          Home
        </button>
        </Link>
        <Link href="/about">
        <button className="inline-flex items-center px-6 py-3 font-medium rounded-md shadow-sm cursor-pointer text-white bg-[#5271ff] hover:bg-blue-700">
          About
        </button>
        </Link>
        <Link href="/contact">
        <button className="inline-flex items-center px-6 py-3 font-medium rounded-md shadow-sm cursor-pointer text-white bg-[#5271ff] hover:bg-blue-700">
          Contact
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
