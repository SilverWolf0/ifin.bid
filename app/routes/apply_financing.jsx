import { useState, useEffect, useRef } from "react";
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
import { BsMegaphone, BsTags, BsXCircle } from "react-icons/bs";
import dashStyles from "~/styles/global.css";
import personalfinanceIcon from "img/personal_finance.png";
import homefinanceIcon from "img/home_finance.png";
import carfinanceIcon from "img/car_finance.png";
import businessfinanceIcon from "img/business_finance.png";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Apply for Financing" }];
};

export default function ApplyFinancingPage() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <head></head>
      <body className='${open ? "ml-0" : "ml-60"} ml-72 flex bg-white p-6'>
        <div className="mx-10 my-6 w-full">
          <div>
            <FaRegCreditCard className="inline-block text-3xl" />
            <span className="ml-4 align-middle font-poppins text-3xl font-bold">
              Apply for Financing
            </span>
          </div>
          <div>
            <div className="m-auto ml-0 flex pb-4 pt-4 font-poppins">
              <div className="w-full flex-col overflow-hidden rounded-2xl bg-white pb-2 pt-2 shadow-md drop-shadow-md">
                <div className="inline-flex w-full flex-row justify-between border-b-2 border-gray-600 text-center">
                  <div className="mx-2 w-full border-b-4 border-lime-800 px-4 py-2 hover:cursor-pointer">
                    <p className="text-lg font-bold">1. Financing Options</p>
                  </div>
                  <div className="mx-2 w-full px-4 py-2 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
                    <p className="text-lg">2. Identity Verification</p>
                  </div>
                  <div className="mx-2 w-full px-4 py-2 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
                    <p className="text-lg">3. Income Verification</p>
                  </div>
                  <div className="mx-2 w-full px-4 py-2 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
                    <p className="text-lg">4. Review Data</p>
                  </div>
                </div>
                <div className="px-12 py-4">
                  <div className="pt-4 text-xl font-semibold">
                    <span>Choose Financing Service Specifications</span>
                  </div>
                  <p className="pt-4 text-lg">Financing Type</p>
                  <div className="inline-flex w-full flex-row justify-between px-8 pt-2 text-center">
                    <div
                      id="ftype"
                      className="mr-4 w-full rounded-md border-2 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
                    >
                      <img
                        src={personalfinanceIcon}
                        className="m-4 ml-auto mr-auto h-28 w-28"
                      />
                      <span className="text-lg">Personal Financing</span>
                    </div>
                    <div
                      id="ftype"
                      className="mr-4 w-full rounded-md border-2 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
                    >
                      <img
                        src={homefinanceIcon}
                        className="m-4 ml-auto mr-auto h-28 w-28"
                      />
                      Home Financing
                    </div>
                    <div
                      id="ftype"
                      className="mr-4 w-full rounded-md border-2 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
                    >
                      <img
                        src={carfinanceIcon}
                        className="m-4 ml-auto mr-auto h-28 w-28"
                      />
                      Car Financing
                    </div>
                    <div
                      id="ftype"
                      className="mr-4 w-full rounded-md border-2 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
                    >
                      <img
                        src={businessfinanceIcon}
                        className="m-4 ml-auto mr-auto h-28 w-28"
                      />
                      Business Financing
                    </div>
                  </div>
                  <div className="pt-4">Total Amount</div>
                  <div>
                    <div className="custom-scrollbars__scrollbar">
                      <button className="custom-scrollbars__button">
                        Left
                      </button>
                      <div className="custom-scrollbars__track-and-thumb">
                        <div className="custom-scrollbars__track"></div>
                        <div className="custom-scrollbars__thumb"></div>
                      </div>
                      <button className="custom-scrollbars__button">
                        Right
                      </button>
                    </div>
                    <input type="text" className="rounded-md border-2" />
                  </div>
                  <div className="pt-4">Preferred Financing Tenure</div>
                </div>
                <div className="inline-flex w-full flex-row justify-between border-t-2 border-gray-600">
                  <div className="mx-2 w-1/6 border-t-4 border-transparent px-4 py-2 hover:cursor-pointer hover:border-t-4 hover:border-lime-600">
                    <p className="text-lg">Next</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
              <h1 className="text-center text-3xl font-bold text-white">
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
                  <p className="text-base font-semibold">[User Name]</p>
                  <p>View Profile</p>
                </div>
              </Link>
              <Link to="/notifications" className="hover:cursor-pointer">
                <div className="fixed right-0 ml-1 mr-1 inline-block rounded-full border-gray-600 p-3 align-middle">
                  <FaRegBell className="text-3xl" />
                </div>
              </Link>
            </div>
            <Link to="/dashboard" className="text-base text-lime-950">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer hover:bg-white">
                <AiOutlineDashboard className="inline-block text-3xl" />
                <span className="ml-2 inline-block align-middle text-base">
                  Dashboard
                </span>
              </div>
            </Link>
            <Link to="/apply_financing" className="text-base text-white">
              <div className="mb-2 ml-2 mr-2 mt-2 block rounded-md bg-green-900 pb-3 pl-4 pr-4 pt-3 hover:cursor-pointer">
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
