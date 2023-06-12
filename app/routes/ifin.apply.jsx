import { Link } from "@remix-run/react";
import Slider from "../components/Slider";
import {
  FaBars,
  FaTimes,
  FaRegUser,
  FaRegBell,
  FaRegCreditCard,
  FaChartBar,
} from "react-icons/fa";
import personalfinanceIcon from "img/personal_finance.png";
import homefinanceIcon from "img/home_finance.png";
import carfinanceIcon from "img/car_finance.png";
import businessfinanceIcon from "img/business_finance.png";

export default function ifinbidApplyRoute() {
  return (
    <div className="mx-10 my-6 w-full">
      <div className="h-14">
        <FaRegCreditCard className="inline-block text-3xl" />
        <span className="ml-4 align-middle font-poppins text-3xl font-bold">
          Apply for Financing
        </span>
      </div>
      <div className="h-auto">
        <div className="pb-4 pt-4 font-poppins">
          <div className="h-184 w-full rounded-2xl border-2 border-gray-300 bg-white pb-2 pt-2 shadow-md drop-shadow-md">
            <div className="fixed inline-flex w-full flex-row justify-between border-b-2 border-gray-600 text-center">
              <div className="mx-2 w-full border-b-4 border-lime-800 px-4 py-4 hover:cursor-pointer">
                <p className="text-xl font-bold">1. Financing Options</p>
              </div>
              <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
                <p className="text-xl">2. Identity Verification</p>
              </div>
              <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
                <p className="text-xl">3. Income Verification</p>
              </div>
              <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
                <p className="text-xl">4. Review Data</p>
              </div>
            </div>
            <div className="my-16 h-fit w-full flex-col px-12 py-4 align-middle">
              <div className="pt-4 text-2xl font-bold">
                <span>Choose Financing Service Specifications</span>
              </div>
              <p className="pt-6 text-lg">Financing Type</p>
              <div className="justify-betweenpt-2 inline-flex w-full flex-row pt-6 text-center">
                <div
                  id="ftype"
                  className="mr-4 w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
                >
                  <img
                    src={personalfinanceIcon}
                    className="m-4 ml-auto mr-auto h-28 w-28"
                  />
                  <p className="text-lg">Personal Financing</p>
                </div>
                <div
                  id="ftype"
                  className="mx-4 w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
                >
                  <img
                    src={homefinanceIcon}
                    className="m-4 ml-auto mr-auto h-28 w-28"
                  />
                  <p className="text-lg">Home Financing</p>
                </div>
                <div
                  id="ftype"
                  className="mx-4 w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
                >
                  <img
                    src={carfinanceIcon}
                    className="m-4 ml-auto mr-auto h-28 w-28"
                  />
                  <p className="text-lg">Car Financing</p>
                </div>
                <div
                  id="ftype"
                  className="ml-4 w-full rounded-md border-2 border-gray-300 px-4 py-2 shadow-md drop-shadow-md hover:cursor-pointer hover:border-black hover:bg-lime-600 hover:text-white"
                >
                  <img
                    src={businessfinanceIcon}
                    className="m-4 ml-auto mr-auto h-28 w-28"
                  />
                  <p className="text-lg">Business Financing</p>
                </div>
              </div>
              <div className="pt-6 text-lg">Total Amount</div>
              <div className="mt-4">
                <div className="inline-block h-6 w-1/2 pl-6 pr-10">
                  <Slider />
                </div>
                <div className="ml-2 inline-block w-1/4 px-2 align-middle">
                  <input
                    type="text"
                    className="w-full rounded-lg border-2 border-gray-300 p-2 font-roboto hover:border-gray-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
              <div className="pt-6 text-lg">Preferred Financing Tenure</div>
              <div className="mt-4">
                <div className="inline-block h-6 w-1/2 pl-6 pr-10">
                  <Slider />
                </div>
                <div className="ml-2 inline-block w-1/4 px-2 align-middle">
                  <input
                    type="text"
                    className="w-full rounded-lg border-2 border-gray-300 p-2 font-roboto hover:border-gray-400 focus:border-blue-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
            <div className="fixed bottom-0 inline-flex w-full flex-row justify-between border-t-2 border-gray-600">
              <div className="left-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-left">
                <p className="text-lg"></p>
              </div>

              <div className="right-0 mx-2 w-1/2 border-t-4 border-transparent px-4 py-4 text-right hover:cursor-pointer hover:border-t-4 hover:border-lime-600">
                <Link to="/apply_financing/personal">
                  <p className="text-lg">Next</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
