import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="bg-white min-h-screen h-full p-4 pl-0">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center p-2 space-x-3 rounded-md bg-[#093045] shadow hover:bg-blue-800 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/user-info"
            className="flex items-center p-2 space-x-3 rounded-md bg-[#093045] shadow hover:bg-blue-800 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span>User Info</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
