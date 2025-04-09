import Link from 'next/link';

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-md p-4 ">
      <img src="logo.png" className="w-[50px] h-[50px] mb-[1%]" />

      <div className="flex flex-row justify-between w-[300px]">
      <Link href="/about">
        <button className="opacity-100 cursor-pointer text-zinc-500 hover:text-[#5271ff]">
          About Us
        </button>
        </Link>
        <Link href="/branches">
        <button className="opacity-100 cursor-pointer text-zinc-500 hover:text-[#5271ff]">
          Branches
        </button>
        </Link>
        <Link href="/services">
        <button className="opacity-100 cursor-pointer text-zinc-500 hover:text-[#5271ff]">
          Services
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
