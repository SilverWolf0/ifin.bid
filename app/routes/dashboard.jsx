import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  FaBars,
  FaTimes,
  FaRegUser,
  FaRegBell,
  FaRegCreditCard,
  FaChartBar,
} from "react-icons/fa";
import { AiOutlineDashboard } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { BsMegaphone } from "react-icons/bs";
import dashStyles from "~/styles/global.css";

export const meta = () => {
  return [{ title: "Dashboard" }];
};

export default function DashboardPage() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <head></head>
      <body className='${open ? "ml-0" : "ml-60"} ml-72 flex bg-white p-6'>
        <div>
          <AiOutlineDashboard className="inline-block text-3xl" />
          <h1 className="m-4 inline-block align-middle text-3xl">
            Dashboard Page
          </h1>
        </div>
        <button
          id="navbarBtn"
          className={"fixed left-6 top-6 z-10 hidden rounded-md p-1"}
          onClick={() => setOpen(!open)}
        >
          {open ? (
            <FaTimes className="text-xl text-white hover:cursor-pointer" />
          ) : (
            <FaBars className="text-xl text-green-900 hover:cursor-pointer" />
          )}
        </button>
        <nav
          id="navBar"
          className={
            '${open ? "block" : "hidden"} fixed left-0 top-0 flex h-screen w-72 flex-col justify-between overflow-y-auto bg-gradient-to-r from-lime-700 to-lime-500 font-poppins drop-shadow-lg'
          }
        >
          <div>
            <div className="mb-4 mt-4 block p-2">
              <h1 className="text-center text-2xl font-bold text-white">
                iFin.bid
              </h1>
            </div>
            <div className="mb-4 mt-4 flex bg-white pb-4 pt-4">
              <Link
                to="/profile"
                className="text-base text-lime-950 hover:cursor-pointer"
              >
                <div className="ml-4 mr-1 inline-block rounded-full border-0 border-gray-600 p-3 align-middle shadow-lg">
                  <FaRegUser className="text-3xl" />
                </div>
                <div className="mb-2 ml-1 mr-1 mt-2 inline-block align-middle text-sm">
                  <p>[User Name]</p>
                  <p>View Profile</p>
                </div>
              </Link>
              <Link to="/notifications" className="hover:cursor-pointer">
                <div className="fixed right-0 ml-1 mr-1 inline-block rounded-full border-gray-600 p-3 align-middle">
                  <FaRegBell className="text-3xl" />
                </div>
              </Link>
            </div>
            <Link to="/dashboard" className="text-white">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md bg-green-900 pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer">
                <AiOutlineDashboard className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Dashboard
                </span>
              </div>
            </Link>
            <Link to="/apply" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <FaRegCreditCard className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Apply Financing
                </span>
              </div>
            </Link>
            <Link to="/applications" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <GrDocumentText className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  View Applications
                </span>
              </div>
            </Link>
            <Link to="/offers" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <BsMegaphone className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Financing Offers
                </span>
              </div>
            </Link>
            <Link to="/analytics" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <FaChartBar className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Analytics
                </span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/settings" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <AiOutlineDashboard className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Settings
                </span>
              </div>
            </Link>
            <Link to="/help" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <AiOutlineDashboard className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Help
                </span>
              </div>
            </Link>
            <Link to="/logout" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <AiOutlineDashboard className="inline-block text-3xl" />
                Log Out
              </div>
            </Link>
          </div>
        </nav>
      </body>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}
