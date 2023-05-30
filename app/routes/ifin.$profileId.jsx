import { json, redirect } from "@remix-run/node";
import {
  Form,
  isRouteErrorResponse,
  useLoaderData,
  useRouteError,  
} from "@remix-run/react";
import invariant from "tiny-invariant";

import { deleteProfile, getProfile } from "~/models/profile.server";
import { requireUserId } from "~/session.server";

export async function loader({ request, params }) {
  const userId = await requireUserId(request);
  invariant(params.profileId, "profileId not found");

  const profile = await getProfile({ userId, id: params.profileId });
  if (!profile) {
    throw new Response("Not Found", { status: 404 });
  }
  return json({ profile });
}

export async function action({ request, params }) {
  const userId = await requireUserId(request);
  invariant(params.profileId, "profileId not found");

  await deleteProfile({ userId, id: params.profileId });

  return redirect("/profile");
}

export default function display() {
  const data = useLoaderData();

  return (
    <div>
      <h3 className="text-2xl font-bold">{data.profile.firstname}</h3>
      <p className="py-6">{data.profile.lastname}</p>
      <p className="py-6">{data.profile.email}</p>
      <p className="py-6">{data.profile.phone}</p>
      <p className="py-6">{data.profile.account}</p>
      <p className="py-6">{data.profile.date}</p>
      <p className="py-6">{data.profile.address}</p>
      <hr className="my-4" />
      <Form method="post">
        <button
          type="submit"
          className="rounded bg-blue-500  px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Delete
        </button>
      </Form>
    </div>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (error instanceof Error) {
    return <div>An unexpected error occurred: {error.message}</div>;
  }

  if (!isRouteErrorResponse(error)) {
    return <h1>Unknown Error</h1>;
  }

  if (error.status === 404) {
    return <div>profile not found</div>;
  }

  return <div>An unexpected error occurred: {error.statusText}</div>;
}
