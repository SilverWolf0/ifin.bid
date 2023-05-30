import { json, redirect } from "@remix-run/node";
import { Link, Form, useActionData } from "@remix-run/react";
import * as React from "react";
import { FaRegUser } from "react-icons/fa";

import { createProfile } from "~/models/profile.server";
import { requireUserId } from "~/session.server";

function update() {
  alert("update sucessfully");
}
function save() {
  alert("save sucessfully");
}

export async function action({ request }) {
  const userId = await requireUserId(request);

  const formData = await request.formData();
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const gmail = formData.get("gmail");
  const phone = formData.get("phone");
  const account = formData.get("account");
  const date = formData.get("date");
  const address = formData.get("address");

  if (typeof firstname !== "string" || firstname.length === 0) {
    return json(
      {
        errors: {
          firstname: "firstname is required",
          lastname: null,
          gmail: null,
          phone: null,
          account: null,
          date: null,
          address: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof lastname !== "string" || lastname.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: "lastname is required",
          gmail: null,
          phone: null,
          account: null,
          date: null,
          address: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof gmail !== "string" || gmail.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          gmail: "firstname is required",
          phone: null,
          account: null,
          date: null,
          address: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof phone !== "string" || phone.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          gmail: null,
          phone: "firstname is required",
          account: null,
          date: null,
          address: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof account !== "string" || account.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          gmail: null,
          phone: null,
          account: "firstname is required",
          date: null,
          address: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof date !== "string" || date.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          gmail: null,
          phone: null,
          account: null,
          date: "firstname is required",
          address: null,
        },
      },
      { status: 400 }
    );
  }

  if (typeof address !== "string" || address.length === 0) {
    return json(
      {
        errors: {
          firstname: null,
          lastname: null,
          gmail: null,
          phone: null,
          account: null,
          date: null,
          address: "firstname is required",
        },
      },
      { status: 400 }
    );
  }

  const profile = await createProfile({
    firstname,
    lastname,
    gmail,
    phone,
    account,
    date,
    address,
    userId,
  });

  return redirect(`/profile/${profile.id}`);
}

export default function NewProfilePage() {
  const actionData = useActionData();
  const firstnameRef = React.useRef(null);
  const lastnameRef = React.useRef(null);
  const gmailRef = React.useRef(null);
  const phoneRef = React.useRef(null);
  const accountRef = React.useRef(null);
  const dateRef = React.useRef(null);
  const addressRef = React.useRef(null);

  React.useEffect(() => {
    if (actionData?.errors?.firstname) {
      firstnameRef.current?.focus();
    } else if (actionData?.errors?.lastname) {
      lastnameRef.current?.focus();
    } else if (actionData?.errors?.gmail) {
      gmailRef.current?.focus();
    } else if (actionData?.errors?.phone) {
      phoneRef.current?.focus();
    } else if (actionData?.errors?.account) {
      accountRef.current?.focus();
    } else if (actionData?.errors?.date) {
      dateRef.current?.focus();
    } else if (actionData?.errors?.address) {
      addressRef.current?.focus();
    }
  }, [actionData]);

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
    <Form
      method="post"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 8,
        width: "100%",
      }}
    >
      <div className=" static mx-5 my-5 h-full w-full rounded-md text-left font-mono text-lg text-black ">
        <div>
          <h1 className="text-3xl font-bold"> Your Profile </h1>
          <label className="flex w-full flex-col gap-1">
            <span>First Name: </span>
            <input
              ref={firstnameRef}
              name="firstname"
              className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
              aria-invalid={actionData?.errors?.firstname ? true : undefined}
              aria-errormessage={
                actionData?.errors?.firstname ? "firstname-error" : undefined
              }
            />
          </label>
          {actionData?.errors?.firstname && (
            <div className="pt-1 text-red-500" id="firstname-error">
              {actionData.errors.firstname}
            </div>
          )}
        </div>

        <div>
          <label className="flex w-full flex-col gap-1">
            <span>Last Name: </span>
            <input
              ref={lastnameRef}
              name="lastname"
              className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
              aria-invalid={actionData?.errors?.lastname ? true : undefined}
              aria-errormessage={
                actionData?.errors?.lastname ? "lastname-error" : undefined
              }
            />
          </label>
          {actionData?.errors?.lastname && (
            <div className="pt-1 text-red-700" id="lastname-error">
              {actionData.errors.lastname}
            </div>
          )}
        </div>

        <div>
          <label className="flex w-full flex-col gap-1">
            <span>E-Mail: </span>
            <input
              ref={gmailRef}
              name="gmail"
              className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
              aria-invalid={actionData?.errors?.gmail ? true : undefined}
              aria-errormessage={
                actionData?.errors?.gmail ? "gmail-error" : undefined
              }
            />
          </label>
          {actionData?.errors?.gmail && (
            <div className="pt-1 text-red-700" id="gmail-error">
              {actionData.errors.gmail}
            </div>
          )}
        </div>

        <div>
          <label className="flex w-full flex-col gap-1">
            <span>Phone: </span>
            <input
              ref={phoneRef}
              name="phone"
              className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
              aria-invalid={actionData?.errors?.phone ? true : undefined}
              aria-errormessage={
                actionData?.errors?.phone ? "phone-error" : undefined
              }
            />
          </label>
          {actionData?.errors?.phone && (
            <div className="pt-1 text-red-700" id="phone-error">
              {actionData.errors.phone}
            </div>
          )}
        </div>

        <div>
          <label className="flex w-full flex-col gap-1">
            <span>Account: </span>
            <input
              ref={accountRef}
              name="account"
              className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black"
              aria-invalid={actionData?.errors?.account ? true : undefined}
              aria-errormessage={
                actionData?.errors?.account ? "account-error" : undefined
              }
            />
          </label>
          {actionData?.errors?.account && (
            <div className="pt-1 text-red-700" id="account-error">
              {actionData.errors.account}
            </div>
          )}
        </div>

        <div>
          <label className="flex w-full flex-col gap-1">
            <span>Date of Birth: </span>
            <input
              ref={dateRef}
              name="date"
              className="flex-1 rounded-md border-2 border-lime-500 px-3 text-lg leading-loose text-black "
              aria-invalid={actionData?.errors?.date ? true : undefined}
              aria-errormessage={
                actionData?.errors?.date ? "date-error" : undefined
              }
            />
          </label>
          {actionData?.errors?.date && (
            <div className="pt-1 text-red-700" id="date-error">
              {actionData.errors.date}
            </div>
          )}
        </div>

        <div>
          <label className="flex w-full flex-col gap-1">
            <span>Address: </span>
            <textarea
              ref={addressRef}
              name="address"
              rows={8}
              className="w-full flex-1 rounded-md border-2 border-lime-500 px-3 py-2 text-lg leading-6 text-black"
              aria-invalid={actionData?.errors?.address ? true : undefined}
              aria-errormessage={
                actionData?.errors?.address ? "address-error" : undefined
              }
            />
          </label>
          {actionData?.errors?.address && (
            <div className="pt-1 text-red-700" id="address-error">
              {actionData.errors.address}
            </div>
          )}
        </div>
      </div>

      <div className="text-right">
        <button
          onClick={save}
          type="submit"
          className="rounded bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 focus:bg-lime-400"
        >
          Save
        </button>
      </div>
      <div className="text-right">
        <button
          onClick={update}
          type="submit"
          className="rounded bg-lime-500 px-4 py-2 text-white hover:bg-lime-600 focus:bg-lime-400"
        >
          Update
        </button>
      </div>
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
                      <input
                        ref={firstnameRef}
                        name="firstname"
                        className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"
                        aria-invalid={
                          actionData?.errors?.firstname ? true : undefined
                        }
                        aria-errormessage={
                          actionData?.errors?.firstname
                            ? "firstname-error"
                            : undefined
                        }
                      />
                      {actionData?.errors?.firstname && (
                        <div className="pt-1 text-red-500" id="firstname-error">
                          {actionData.errors.firstname}
                        </div>
                      )}
                      <div className="font-medium">E-mail</div>
                      <input className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"></input>
                      <div className="font-medium">NRIC</div>
                      <input
                        placeholder="XXXXXX-XX-XXXX"
                        className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"
                      />
                    </div>
                    <div className="ml-8 mr-4 w-1/2 text-lg">
                      <div className="font-medium">Last Name</div>
                      <input
                        ref={lastnameRef}
                        name="lastname"
                        className="mb-2 mt-0.5 w-full rounded border-b-2 border-gray-500 px-4 py-2 focus:border-blue-500 focus:outline-none"
                        aria-invalid={
                          actionData?.errors?.lastname ? true : undefined
                        }
                        aria-errormessage={
                          actionData?.errors?.lastname
                            ? "lastname-error"
                            : undefined
                        }
                      />
                      {actionData?.errors?.lastname && (
                        <div className="pt-1 text-red-500" id="lastname-error">
                          {actionData.errors.lastname}
                        </div>
                      )}
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
    </Form>
  );
}
