import React, { useState } from "react";
import { Link } from "@remix-run/react";
import { FaRegUser } from "react-icons/fa";

export default function ifinbidApplyRoute() {
  const [value, setValue] = React.useState("Johor");
  const options = [
    { label: "Johor", value: "Johor" },
    { label: "Kedah", value: "Kedah" },
    { label: "Kelantan", value: "Kelantan" },
    { label: "Malacca", value: "Malacca" },
    { label: "Negeri Sembilan", value: "Negeri Sembilan" },
    { label: "Pahang", value: "Pahang" },
    { label: "Penang", value: "Penang" },
    { label: "Perak", value: "Perak" },
    { label: "Perlis", value: "Perlis" },
    { label: "Sabah", value: "Sabah" },
    { label: "Sarawak", value: "Sarawak" },
    { label: "Selangor", value: "Selangor" },
    { label: "Terengganu", value: "Terengganu" },
    { label: "WP Kuala Lumpur", value: "WP Kuala Lumpur" },
  ];
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const Dropdown = ({ value, options, onChange }) => {
    return (
      <select
        value={value}
        onChange={onChange}
        className="mb-2 mt-0.5 w-full rounded border-2 border-gray-500 px-2 py-2 hover:cursor-pointer"
      >
        {options.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  };

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
            <div className="my-12 flex h-fit flex-col px-12 py-4 align-middle">
              <div className="mt-8 flex h-1/2 flex-row">
                <div className="w-1/3">
                  <div className="m-auto mt-4 h-40 w-40 rounded-full border-2 border-gray-600 p-12 shadow-md drop-shadow-md">
                    <FaRegUser className="text-6xl" />
                  </div>
                  <div className="mt-4 text-center">
                    <button
                      type="button"
                      className="rounded border-2 border-black bg-gray-200 px-4 py-1 hover:border-gray-500 hover:bg-gray-100"
                    >
                      Upload image...
                    </button>
                  </div>
                </div>
                <div className="flex w-2/3 flex-row">
                  <div className="ml-4 mr-8 w-1/2 text-lg">
                    <div className="font-medium">First Name</div>
                    <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
                    <div className="font-medium">E-mail</div>
                    <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
                    <div className="font-medium">NRIC</div>
                    <input
                      placeholder="XXXXXX-XX-XXXX"
                      className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    ></input>
                  </div>
                  <div className="ml-8 mr-4 w-1/2 text-lg">
                    <div className="font-medium">Last Name</div>
                    <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
                    <div className="font-medium">Mobile Phone No.</div>
                    <input
                      placeholder="XXX-XXXXXXXX"
                      className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    ></input>
                    <div className="font-medium">Date of Birth</div>
                    <input
                      placeholder="dd/mm/yyyy"
                      className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"
                    ></input>
                  </div>
                </div>
              </div>
              <div className="mt-6 flex h-1/2 flex-row">
                <div className="ml-4 mr-8 w-1/2 text-lg">
                  <div className="font-medium">Address Line 1</div>
                  <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
                  <div className="font-medium">Country</div>
                  <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
                  <div className="font-medium">Postal Code</div>
                  <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
                </div>
                <div className="ml-8 mr-4 w-1/2 text-lg">
                  <div className="font-medium">Address Line 2</div>
                  <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
                  <div className="font-medium">State</div>
                  <Dropdown
                    options={options}
                    value={value}
                    onChange={handleChange}
                  />
                  <div className="font-medium">City</div>
                  <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
                </div>
              </div>
            </div>
            <div className="fixed bottom-0 w-full border-t-2 border-gray-600">
              <div className="mx-2 border-t-4 border-transparent px-4 py-4 text-center hover:cursor-pointer hover:border-t-4 hover:border-lime-600">
                <Link to="/ifin/profile">
                  <p className="text-lg">Save</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
