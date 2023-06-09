import React, { useState } from "react";
import { Link, Outlet } from "@remix-run/react";
import { FaRegUser } from "react-icons/fa";

export default function ifinbidProfileIndexRoute() {
  const [value_id, setValue] = React.useState("Birth Certificate");
  const [value_statement, setValue] = React.useState("Payslip");
  const options_id = [
    { label: "Birth Certificate", value_id: "Birth Certificate" },
    { label: "Passport", value_id: "Passport" },
    {
      label: "Certificate of Citizenship",
      value_id: "Certificate of Citizenship",
    },
    { label: "Driver's License", value_id: "Driver's License" },
  ];
  const options_statement = [
    { label: "Payslip", value_id: "Payslip" },
    { label: "Tax Receipt", value_id: "Tax Receipt" },
  ];
  const handleChangeId = (event) => {
    setValue(event.target.value_id);
  };
  const handleChangeStatement = (event) => {
    setValue(event.target.value_statement);
  };
  const Dropdown_id = ({ value_id, options_id, onChange }) => {
    return (
      <select
        value={value_id}
        onChange={onChange}
        className="mb-2 mt-0.5 w-full rounded border-2 border-gray-500 px-2 py-2 hover:cursor-pointer"
      >
        {options_id.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  };
  const DropdownStatement = ({
    value_statement,
    options_statement,
    onChange,
  }) => {
    return (
      <select
        value={value_statement}
        onChange={onChange}
        className="mb-2 mt-0.5 w-full rounded border-2 border-gray-500 px-2 py-2 hover:cursor-pointer"
      >
        {options_statement.map((option) => (
          <option value={option.value}>{option.label}</option>
        ))}
      </select>
    );
  };

  return (
    <div className="my-12 flex h-fit flex-col gap-y-4 px-12 pt-12 align-middle">
      <div className="flex flex-col text-lg">
        <div className="text-2xl font-extrabold">
          <h1>Personal Identification</h1>
        </div>
        <div className="font-medium">
          These documents will be used to verify your identity when applying for
          any financing services.
        </div>
        <p className="mb-2 mt-0.5 w-1/2">Identification</p>
        <Dropdown options={options} value={value} onChange={handleChange} />
        <Dropdown options={options} value={value} onChange={handleChange} />
      </div>
      <div className="flex flex-col text-lg">
        <div className="text-2xl font-extrabold">Income Statements</div>
        <div className="font-medium">
          <h1>
            These documents will be used to verify your eligibility for applying
            financing services.
          </h1>
        </div>
        <input className="mb-2 mt-0.5 w-1/2 rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>

        <input className="mb-2 mt-0.5 w-1/2 rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
      </div>
    </div>
  );
}
