import { json, redirect } from "@remix-run/node";
import { Form, Link, useActionData, useSearchParams } from "@remix-run/react";
import * as React from "react";

import { getUserId, createUserSession } from "~/session.server";

import { createUser, getUserByEmail } from "~/models/user.server";
import { safeRedirect, validateEmail } from "~/utils";

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
  const phone = formData.get("phone");
  const password = formData.get("password");
  const redirectTo = safeRedirect(formData.get("redirectTo"), "/");

  if (!validateEmail(email)) {
    return json(
      { errors: { email: "Email is invalid", password: null } },
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
          phone: "A user already exists with this phone",
          password: null,
        },
      },
      { status: 400 }
    );
  }

  const user = await createUser(email, firstname, lastname, phone, password);

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
  const phoneRef = React.useRef(null);
  const passwordRef = React.useRef(null);

  React.useEffect(() => {
    if (actionData?.errors?.email) {
      emailRef.current?.focus();
    } else if (actionData?.errors?.firstname) {
      firstnameRef.current?.focus();
    } else if (actionData?.errors?.lastname) {
      lastnameRef.current?.focus();
    } else if (actionData?.errors?.phone) {
      phoneRef.current?.focus();
    } else if (actionData?.errors?.password) {
      passwordRef.current?.focus();
    }
  }, [actionData]);

  return (
    <div className="flex min-h-full flex-col justify-center">
      <div className="mx-auto w-full max-w-md px-8">
        <Form method="post" className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                ref={emailRef}
                id="email"
                required
                autoFocus={true}
                name="email"
                type="email"
                autoComplete="email"
                aria-invalid={actionData?.errors?.email ? true : undefined}
                aria-describedby="email-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />

              {actionData?.errors?.email && (
                <div className="pt-1 text-red-700" id="email-error">
                  {actionData.errors.email}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="firstname"
              className="block text-sm font-medium text-gray-700"
            >
              First Name
            </label>
            <div className="mt-1">
              <input
                ref={firstnameRef}
                id="firstname"
                required
                autoFocus={true}
                name="firstname"
                type="firstname"
                autoComplete="firstname"
                aria-invalid={actionData?.errors?.firstname ? true : undefined}
                aria-describedby="firstname-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />

              {actionData?.errors?.firstname && (
                <div className="pt-1 text-red-700" id="firstname-error">
                  {actionData.errors.firstname}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium text-gray-700"
            >
              Last Name
            </label>
            <div className="mt-1">
              <input
                ref={lastnameRef}
                id="lastname"
                required
                autoFocus={true}
                name="lastname"
                type="lastname"
                autoComplete="lastname"
                aria-invalid={actionData?.errors?.lastname ? true : undefined}
                aria-describedby="lastname-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />

              {actionData?.errors?.lastname && (
                <div className="pt-1 text-red-700" id="lastname-error">
                  {actionData.errors.lastname}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <div className="mt-1">
              <input
                ref={phoneRef}
                id="phone"
                required
                autoFocus={true}
                name="phone"
                type="phone"
                autoComplete="phone"
                aria-invalid={actionData?.errors?.phone ? true : undefined}
                aria-describedby="phone-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />

              {actionData?.errors?.phone && (
                <div className="pt-1 text-red-700" id="phone-error">
                  {actionData.errors.phone}
                </div>
              )}
            </div>
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <div className="mt-1">
              <input
                id="password"
                ref={passwordRef}
                name="password"
                type="password"
                autoComplete="new-password"
                aria-invalid={actionData?.errors?.password ? true : undefined}
                aria-describedby="password-error"
                className="w-full rounded border border-gray-500 px-2 py-1 text-lg"
              />

              {actionData?.errors?.password && (
                <div className="pt-1 text-red-700" id="password-error">
                  {actionData.errors.password}
                </div>
              )}
            </div>
          </div>

          <input type="hidden" name="redirectTo" value={redirectTo} />
          <button
            type="submit"
            className="w-full rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
          >
            Create Account
          </button>
          <div className="flex items-center justify-center">
            <div className="text-center text-sm text-gray-500">
              Already have an account?{" "}
              <Link
                className="text-blue-500 underline"
                to={{
                  pathname: "/login",
                  search: searchParams.toString(),
                }}
              >
                Log in
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
}
