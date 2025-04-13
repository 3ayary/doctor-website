import Link from "next/link";

const Navbar = () => {
  return (
    <div className="flex sticky flex-col top-0 z-50 justify-between items-center bg-white shadow-md p-4  lg:flex-row  ">
      <img src="/logo.png" className="w-[50px] h-[50px]" />

      <div className="space-x-4 m-3">
        <Link href="/">
          <button className="inline-flex items-center px-6 py-3 font-medium rounded-md shadow-sm cursor-pointer text-white bg-[#5271ff] hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Home
          </button>
        </Link>
        <Link href="/about">
          <button className="inline-flex items-center px-6 py-3 font-medium rounded-md shadow-sm cursor-pointer text-white bg-[#5271ff] hover:bg-blue-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
              />
            </svg>
            About
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
