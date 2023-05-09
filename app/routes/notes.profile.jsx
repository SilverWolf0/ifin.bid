import { json, redirect } from "@remix-run/node";
import { Form, useActionData } from "@remix-run/react";
import * as React from "react";

import { createProfile } from "~/models/profile.server";
import { requireUserId } from "~/session.server";

function update(){
  alert('update sucessfully');
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
      { errors: { firstname: "firstname is required", lastname: null, gmail: null, phone: null, account:null, date: null, address: null, } },
      { status: 400 }
    );
  }

  if (typeof lastname !== "string" || lastname.length === 0) {
    return json(
      { errors: { firstname: null, lastname: "lastname is required", gmail: null, phone: null, account:null, date: null, address: null, } },
      { status: 400 }
    );
  }

  if (typeof gmail !== "string" || gmail.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: "firstname is required", phone: null, account:null, date: null, address: null, } },
      { status: 400 }
    );
  }

  if (typeof phone !== "string" || phone.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: "firstname is required", account:null, date: null, address: null, } },
      { status: 400 }
    );
  }

  if (typeof account !== "string" || account.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:"firstname is required", date: null, address: null, } },
      { status: 400 }
    );
  }

  if (typeof date !== "string" || date.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:null, date: "firstname is required", address: null, } },
      { status: 400 }
    );
  }

  if (typeof address !== "string" || address.length === 0) {
    return json(
      { errors: { firstname: null, lastname: null, gmail: null, phone: null, account:null, date: null, address: "firstname is required", } },
      { status: 400 }
    );
  }

  const profile = await createProfile({ firstname, lastname, gmail, phone, account, date, address, userId });

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
      
      <div>
      <h1 className="text-2xl font-bold"> Your Profile </h1>
        <label className="flex w-full flex-col gap-1">
          <span>First Name: </span>
          <input
            ref={firstnameRef}
            name="firstname"
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
            aria-invalid={actionData?.errors?.firstname ? true : undefined}
            aria-errormessage={
              actionData?.errors?.firstname ? "firstname-error" : undefined
            }
          />
        </label>
        {actionData?.errors?.firstname && (
          <div className="pt-1 text-red-700" id="firstname-error">
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
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
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
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
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
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
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
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
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
            className="flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose"
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
            className="w-full flex-1 rounded-md border-2 border-blue-500 px-3 py-2 text-lg leading-6"
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

      <div className="text-right">
        <button onClick={update}
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Save
        </button>
      </div>
    </Form>
  );
}