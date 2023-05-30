import { useState } from "react";
import { Link } from "@remix-run/react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
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

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export const meta = () => {
  return [{ title: "Dashboard" }];
};

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function DashboardPage() {
  const [open, setOpen] = useState(false);
  const data = {
    labels: ["1"],
    datasets: [
      {
        label: "Dataset 1",
        data: [36],
        backgroundColor: "green",
        borderWidth: 0,
        borderRadius: 12,
      },
      {
        label: "Dataset 2",
        data: [42],
        backgroundColor: "teal",
        borderWidth: 0,
        borderRadius: 12,
      },
    ],
  };
  const options = {};

  return (
    <main>
      <head>
        <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
      </head>
      <div className="mx-10 my-6 w-full">
        <div>
          <AiOutlineDashboard className="inline-block text-3xl" />
          <span className="ml-4 align-middle font-poppins text-3xl font-bold">
            Dashboard
          </span>
        </div>
        <div className="flex-row">
          <div className="w-3/5 flex-col p-0">
            <div className="m-auto ml-0 flex flex-row pb-2 pt-4 font-poppins">
              <div className="mr-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
                <div className="">
                  <span className="mr-4 align-middle text-xl font-bold">
                    Bank Offers
                  </span>
                  <BsMegaphone className="inline-block text-2xl" />
                </div>
                <p className="py-2 font-roboto text-6xl font-semibold">0</p>
                <p className="py-2 align-middle font-normal">
                  Last Month: <span className="font-semibold">0</span>
                </p>
              </div>
              <div className="mx-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
                <div className="">
                  <span className="mr-4 align-middle text-xl font-bold">
                    Approved Offers
                  </span>
                  <BsTags className="inline-block text-2xl" />
                </div>
                <p className="py-2 font-roboto text-6xl font-semibold">0</p>
                <p className=" py-2 font-normal">
                  Last Month: <span className="font-semibold">0</span>
                </p>
              </div>
              <div className="ml-3 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
                <div className="">
                  <span className="mr-4 align-middle text-xl font-bold">
                    Closed Offers
                  </span>
                  <BsXCircle className="inline-block text-xl" />
                </div>
                <p className="py-2 font-roboto text-6xl font-semibold">0</p>
                <p className=" py-2 font-normal">
                  Last Month: <span className="font-semibold">0</span>
                </p>
              </div>
            </div>
            <div className="m-auto ml-0 flex flex-col pt-2 font-poppins">
              <div className="mb-4 flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
                <div className="">
                  <span className="mr-4 align-middle text-xl font-bold">
                    Financing Summary
                  </span>
                </div>
                <div className="mt-6 flex flex-row">
                  <div className="flex flex-col">
                    <div>Pie Graph</div>
                  </div>
                </div>
                {/*<div className="mr-10 p-10">
                  <Bar data={data} option={options}></Bar>
                  </div>*/}
              </div>
              <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
                <div className="">
                  <span className="mr-4 align-middle text-xl font-bold">
                    Payment Tracker (Monthly)
                  </span>
                </div>
                <div>Home Financing</div>
                <div>Personal Financing</div>
              </div>
            </div>
          </div>
          <div className="w-2/5 flex-col">
            <div className="m-auto mr-0 flex flex-row pb-2 pt-4 font-poppins">
              <div className="flex w-full flex-col overflow-hidden rounded-2xl bg-white px-4 pb-2 pt-2 shadow-md drop-shadow-md">
                <span className="mr-4 align-middle text-xl font-bold">
                  Payment Tracker (Monthly)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
