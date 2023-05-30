import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";
import {
  FaBars,
  FaTimes,
  FaRegUser,
  FaRegBell,
  FaRegCreditCard,
  FaChartBar,
} from "react-icons/fa";
import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { GrDocumentText } from "react-icons/gr";
import { BsMegaphone, BsTags, BsXCircle } from "react-icons/bs";
import { BiHelpCircle, BiLogOut } from "react-icons/bi";

export async function loader({ request }) {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
}

export default function IfinPage() {
  const data = useLoaderData();
  const user = useUser();

  return (
    <main>
      <body>
        <nav
          id="navBar"
          className={
            "fixed left-0 top-0 flex h-screen w-72 flex-col justify-between overflow-y-auto bg-gradient-to-r from-lime-700 to-lime-500 font-poppins drop-shadow-lg"
          }
        >
          <div>
            <div className="mb-4 mt-4 block p-2">
              <h1 className="text-center text-3xl font-bold text-white">
                iFin.bid
              </h1>
            </div>
            <div className="mb-4 mt-4 flex bg-white pb-4 pt-4">
              <Link
                to="/ifin/profile"
                className="text-base text-lime-950 hover:cursor-pointer"
              >
                <div className="ml-4 mr-1 inline-block rounded-full border-0 border-gray-600 p-3 align-middle shadow-lg">
                  <FaRegUser className="text-3xl" />
                </div>
                <div className="mb-2 ml-1 mr-1 mt-2 inline-block align-middle text-sm">
                  <p className="font-semibold">[User Name]</p>
                  <p>View Profile</p>
                </div>
              </Link>
              <Link to="/ifin/notifications" className="hover:cursor-pointer">
                <div className="fixed right-0 ml-1 mr-1 inline-block rounded-full border-gray-600 p-3 align-middle">
                  <FaRegBell className="text-3xl" />
                </div>
              </Link>
            </div>
            <Link to="/ifin/dashboard" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <AiOutlineDashboard className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Dashboard
                </span>
              </div>
            </Link>
            <Link to="/ifin/apply" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <FaRegCreditCard className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Apply Financing
                </span>
              </div>
            </Link>
            <Link to="/ifin/applications" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <GrDocumentText className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  View Applications
                </span>
              </div>
            </Link>
            <Link to="/ifin/offers" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <BsMegaphone className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Financing Offers
                </span>
              </div>
            </Link>
            <Link to="/ifin/analytics" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <FaChartBar className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Analytics
                </span>
              </div>
            </Link>
          </div>
          <div>
            <Link to="/ifin/settings" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <AiOutlineSetting className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Settings
                </span>
              </div>
            </Link>
            <Link to="/ifin/help" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <BiHelpCircle className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Help
                </span>
              </div>
            </Link>
            <Link to="/ifin/logout" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <BiLogOut className="inline-block text-3xl" />
                Log Out
              </div>
            </Link>
          </div>
        </nav>
        <div className="ml-72 flex bg-white p-6">
          <Outlet />
        </div>
      </body>
    </main>
  );
}
