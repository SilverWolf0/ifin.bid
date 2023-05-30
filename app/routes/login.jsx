import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { createUserSession, getUserId } from "~/session.server";
import { verifyLogin } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

import { FaRegEnvelope } from "react-icons/fa";
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
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/notes");
  const remember = formData.get("remember");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
      { status: 400 }
    );
  }

  if (typeof password !== "string" || password.length === 8) {
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

  const user = await verifyLogin(email, password);

  if (!user) {
    return json(
      { errors: { email: "Invalid email or password", password: null } },
      { status: 400 }
    );
  }

  return createUserSession({
    request,
    userId: user.id,
    remember: remember === "on" ? true : false,
    redirectTo,
  });
}

export const meta = () => [{ title: "Login" }];

export default function LoginPage() {
  const [searchParams] = useSearchParams();
  const redirectTo = searchParams.get("redirectTo") || "/notes";
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <main>
      <head></head>
      <body className="flex h-screen justify-center bg-gradient-to-b from-cyan-50 to-lime-100">
        <div className="absolute z-10 flex h-screen w-screen bg-login bg-cover opacity-20 mix-blend-darken blur-md grayscale"></div>
        <div className="z-20 m-auto flex h-176 w-176 flex-col rounded-2xl bg-white shadow-md drop-shadow-md">
          <Form method="post" className="h-full">
            <div className="m-4 rounded-t-xl bg-lime-600 pb-6 pt-6">
              <h1 className="text-center font-poppins text-5xl font-bold text-white">
                iFin.bid
              </h1>
            </div>
            <div className="pl-28 pr-28 pt-14">
              <div className="mb-2 mt-2">
                <h1 className="text-center font-poppins text-3xl font-bold">
                  SIGN IN
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
                  autoFocus={true}
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
                  type="password"
                  name="pass"
                  placeholder="Password"
                  id="password"
                  ref={passwordRef}
                  autoComplete="current-password"
                  aria-invalid={actionData?.errors?.password ? true : undefined}
                  aria-describedby="password-error"
                  className="inline-block w-full rounded-lg border-2 border-gray-300 pb-2 pl-10 pr-3 pt-2 font-roboto hover:border-gray-400 focus:border-blue-500 focus:outline-none"
                ></input>
                {actionData?.errors?.password && (
                  <div className="pt-1 text-red-700" id="password-error">
                    {actionData.errors.password}
                  </div>
                )}
              </div>
              <div className="flex flex-row justify-between pb-4 pl-6 pr-6">
                <div className="flex flex-row">
                  <input
                    type="checkbox"
                    name="terms"
                    className="mb-1 mt-1 h-4 w-4 rounded-md border-2 border-gray-400"
                  ></input>
                  <p className="ml-2 align-middle font-robotocondensed">
                    Remember Email
                  </p>
                </div>
                <div>
                  <p className="align-middle font-robotocondensed">
                    Forgot Password
                  </p>
                </div>
              </div>
              <div className="mt-4 flex flex-col pb-4 pl-6 pr-6">
                <input type="hidden" name="redirectTo" value={redirectTo} />
                <button
                  type="submit"
                  className="rounded-lg border-none bg-lime-700 pb-2 pt-2 align-middle font-roboto text-xl font-bold text-white hover:bg-lime-800"
                >
                  SIGN IN
                </button>
              </div>
            </div>
            <div className="m-auto pb-3 pl-6 pr-6 pt-20 align-bottom">
              <p className="text-center font-robotocondensed">
                Don't have an account? Create a free account{" "}
                <Link
                  to={{
                    pathname: "/register",
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
