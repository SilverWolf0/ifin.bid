import React, { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { FaRegUser } from "react-icons/fa";

export default function ifinbidProfileRoute() {
  return (
    <div className="mx-10 my-6 w-full">
      <div className="h-14">
        <FaRegUser className="inline-block text-3xl" />
        <span className="ml-4 align-middle font-poppins text-3xl font-bold">
          Profile
        </span>
      </div>
      <div className="h-auto">
        <div className="pb-4 pt-4 font-poppins">
          <div className="h-184 w-full rounded-2xl border-2 border-gray-300 bg-white shadow-md drop-shadow-md">
            <div className="fixed inline-flex w-full flex-row justify-between border-b-2 border-gray-600 text-center">
              <div className="mx-2 w-full border-b-4 border-lime-800 px-4 py-4 hover:cursor-pointer">
                <p className="text-xl font-bold">Profile Details</p>
              </div>
              <div className="mx-2 w-full px-4 py-4 hover:cursor-pointer hover:border-b-4 hover:border-lime-600">
                <p className="text-xl">Documentations</p>
              </div>
            </div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
