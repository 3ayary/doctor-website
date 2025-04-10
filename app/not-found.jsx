import Link from 'next/link';

const NotFound = () => {
  return (
    <div >
    <div className="h-screen flex justify-center flex-col items-center text-4xl font-bold text-gray-700">
      <h1>404 - Page Not Found</h1>
      <Link href="/">
        <button className="inline-flex items-center px-6 py-3 mt-10 font-medium rounded-md shadow-sm cursor-pointer text-white bg-[#5271ff] hover:bg-blue-700">
          Back to Home
        </button>
        </Link>
    </div>

    </div>

  )
}

export default NotFound