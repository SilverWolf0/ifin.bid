import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { getUserId, createUserSession } from "~/session.server";

import { createUser, getUserByEmail } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

import { FaRegEnvelope, FaRegUser } from "react-icons/fa";
import { HiOutlineKey } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";

import dashStyles from "~/styles/global.css";

export function links() {
  return [{ rel: "stylesheet", href: dashStyles }];
}

export async function loader({ request }) {
  const userId = await getUserId(request);
  if (userId) return redirect("/");
  return json({});
}

export async function action({ request }) {
  const formData = await request.formData();
  const email = formData.get("email");
  const firstname = formData.get("firstname");
  const lastname = formData.get("lastname");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is Invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 0) {
    return json(
      { errors: { email: null, password: "Password is required" } },
      { status: 400 }
    );
  }

  if (password.length < 8) {
    return json(
      { errors: { email: null, password: "Password is too short" } },
      { status: 400 }
    );
  }

  const existingUser = await getUserByEmail(email);
  if (existingUser) {
    return json(
      {
        errors: {
          email: "A user already exists with this email",
          firstname: "A user already exists with this firstname",
          lastname: "A user already exists with this lastname",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, firstname, lastname, password);

  return createUserSession({
    request,
    userId: user.id,
    remember: false,
    redirectTo,
  });
}

export const meta = () => [{ title: "Sign Up" }];

export default function Join() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") ?? undefined;
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const firstnameRef = React.useRef(null);
  const lastnameRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.firstname) {
      firstnameRef.current?.focus();
    } else if (actionData?.errors?.lastname) {
      lastnameRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <main>
      <head></head>
      <body className="flex h-screen justify-center bg-gradient-to-b from-cyan-50 to-lime-100">
        <div className="absolute z-10 flex h-screen w-screen bg-login bg-cover opacity-20 mix-blend-darken blur-md grayscale"></div>
        <div className="z-30 m-auto flex h-176 w-176 flex-col rounded-2xl bg-white shadow-md drop-shadow-md">
          <Form method="post" className="h-full">
            <div className="m-4 rounded-t-xl bg-lime-600 pb-6 pt-6">
              <h1 className="text-center font-poppins text-5xl font-bold text-white">
                iFin.bid
              </h1>
            </div>
            <div className="pb-6 pl-28 pr-28 pt-7">
              <div className="mb-2 mt-2">
                <h1 className="text-center font-poppins text-3xl font-bold">
                  SIGN UP
                </h1>
              </div>
              <div className="mt-6 flex flex-col pl-6 pr-6">
                <button className="rounded-lg border-2 pb-2 pt-2 font-roboto text-xl font-bold text-gray-600 hover:border-gray-400 hover:outline-none">
                  <FcGoogle className="mr-1 inline-block text-3xl" />
                  <span className="ml-1 inline-block align-middle">
                    SIGN IN WITH GOOGLE
                  </span>
                </button>
                <div className="mt-3 flex flex-row">
                  <div className="m-auto mr-4 inline-block w-full border-b-2 border-gray-400 align-middle"></div>
                  <p className="text-md inline-block text-center align-middle font-robotocondensed text-gray-600">
                    OR
                  </p>
                  <div className="m-auto ml-4 inline-block w-full border-b-2 border-gray-400 align-middle"></div>
                </div>
              </div>
              <div className="mb-4 mt-3 pl-6 pr-6">
                {/*<p className="mb-2 font-poppins text-lg">Full Name</p>*/}
                <div className="flex flex-row">
                  <div className="border-gray-400">
                    <FaRegUser className="absolute mb-3 ml-3 mr-2 mt-3 text-xl" />
                  </div>
                  <input
                    type="text"
                    name="firstname"
                    placeholder="First Name"
                    ref={firstnameRef}
                    id="firstname"
                    required
                    autoFocus={true}
                    autoComplete="firstname"
                    aria-invalid={
                      actionData?.errors?.firstname ? true : undefined
                    }
                    aria-describedby="firstname-error"
                    className="mr-2 inline-block w-full rounded-lg border-2 border-gray-300 pb-2 pl-10 pr-3 pt-2 font-roboto hover:border-gray-400 focus:border-blue-500 focus:outline-none"
                  ></input>
                  {/*Error Handling*/}
                  {actionData?.errors?.firstname && (
                    <div className="pt-1 text-red-700" id="firstname-error">
                      {actionData.errors.firstname}
                    </div>
                  )}
                  <div className="border-gray-300">
                    <FaRegUser className="absolute mb-3 ml-5 mr-2 mt-3 text-xl" />
                  </div>
                  <input
                    type="text"
                    name="lastname"
                    placeholder="Last Name"
                    ref={lastnameRef}
                    id="lastname"
                    required
                    autoComplete="lastname"
                    aria-invalid={
                      actionData?.errors?.lastname ? true : undefined
                    }
                    aria-describedby="lastname-error"
                    className="ml-2 inline-block w-full rounded-lg border-2 border-gray-300 pb-2 pl-10 pr-3 pt-2 font-roboto hover:border-gray-400 focus:border-blue-500 focus:outline-none"
                  ></input>
                  {actionData?.errors?.lastname && (
                    <div className="pt-1 text-red-700" id="lastname-error">
                      {actionData.errors.lastname}
                    </div>
                  )}
                </div>
              </div>
              <div className="mb-4 pl-6 pr-6">
                <div>
                  {/*<p className="mb-2 font-poppins text-lg">Email</p>*/}
                  <div className="border-gray-300 pr-4">
                    <FaRegEnvelope className="absolute mb-3 ml-3 mr-2 mt-3 text-xl" />
                  </div>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  ref={emailRef}
                  id="email"
                  required
                  autoComplete="email"
                  aria-invalid={actionData?.errors?.email ? true : undefined}
                  aria-describedby="email-error"
                  className="inline-block w-full rounded-lg border-2 border-gray-300 pb-2 pl-10 pr-3 pt-2 font-roboto hover:border-gray-400 focus:border-blue-500 focus:outline-none"
                ></input>
                {actionData?.errors?.email && (
                  <div className="pt-1 text-red-700" id="email-error">
                    {actionData.errors.email}
                  </div>
                )}
              </div>
              <div className="mb-4 pl-6 pr-6 align-middle">
                {/*<p className="mb-2 ml-1 font-poppins text-lg">Password</p>*/}
                <div className="border-gray-300 pr-4">
                  <HiOutlineKey className="absolute mb-3 ml-3 mr-2 mt-3 text-xl" />
                </div>
                <input
                  id="password"
                  ref={passwordRef}
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  aria-invalid={actionData?.errors?.password ? true : undefined}
                  aria-describedby="password-error"
                  placeholder="Password (min. 8 characters)"
                  className="inline-block w-full rounded-lg border-2 border-gray-300 pb-2 pl-10 pr-3 pt-2 font-roboto hover:border-gray-400 focus:border-blue-500 focus:outline-none"
                ></input>
              </div>
              {actionData?.errors?.password && (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
              <div className="flex flex-row pb-4 pl-6 pr-6">
                <input
                  type="checkbox"
                  name="terms"
                  className="h-4 w-4 rounded-md border-2 border-gray-400 align-middle"
                ></input>
                <p className="ml-2 align-middle font-robotocondensed">
                  I agree to the{" "}
                  <span className="text-blue-400">Terms of Service</span> and{" "}
                  <span className="text-blue-400">Privacy Policy</span>
                </p>
              </div>
              <div className="mt-4 flex flex-col pb-4 pl-6 pr-6">
                <input type="hidden" name="redirectTo" value={redirectTo} />
                <button
                  type="submit"
                  className="rounded-lg border-none bg-lime-700 pb-2 pt-2 align-middle font-roboto text-xl font-bold text-white hover:bg-lime-800"
                >
                  SIGN UP
                </button>
              </div>
            </div>
            <div className="m-auto pb-4 pl-6 pr-6 pt-7">
              <p className="text-center font-robotocondensed">
                Already have an account? Log in{" "}
                <Link
                  to={{
                    pathname: "/login",
                    search: searchParams.toString(),
                  }}
                >
                  <span className="text-blue-400">here</span>
                </Link>
              </p>
            </div>
          </Form>
        </div>
      </body>
    </main>
  );
}
