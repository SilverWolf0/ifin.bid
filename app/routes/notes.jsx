import { json } from "@remix-run/node";
import { Form, Link, NavLink, Outlet, useLoaderData } from "@remix-run/react";

import { requireUserId } from "~/session.server";
import { useUser } from "~/utils";
import { getNoteListItems } from "~/models/note.server";

export async function loader({ request }) {
  const userId = await requireUserId(request);
  const noteListItems = await getNoteListItems({ userId });
  return json({ noteListItems });
}

export default function MainsPage() {
  const data = useLoaderData();
  const user = useUser();

  return (
    <div className="flex h-full min-h-screen flex-col">
      <header className="flex items-center justify-between bg-green-600 p-4 text-white bg-left ">
        <h1 className="text-3xl font-bold">
          <Link to=".">Ifin.Bid</Link>
        </h1>
      </header>

      <main className="flex h-full bg-white">
        <div className="h-full w-80 border-r bg-gray-50">
        <Link to ="profile " className="block p-4 text-xl text-blue-500">
          <p>{user.firstname}</p>
        </Link>
          <Link to="new" className="block p-4 text-xl text-blue-500">
            New Note
          </Link>
          <Link to="profile" className="block p-4 text-xl text-blue-500">
            Edit Profile
          </Link>
          <Link to="dashboard" className="block p-4 text-xl text-blue-500">
            Dashboard
          </Link>
          <Link to="apply" className="block p-4 text-xl text-blue-500">
            Apply Financing
          </Link>
          <Link to="view" className="block p-4 text-xl text-blue-500">
            View Application Offers
          </Link>
          <Link to="offer" className="block p-4 text-xl text-blue-500">
            Offers
          </Link>
          <Link to="static" className="block p-4 text-xl text-blue-500">
            Analytics
          </Link>
          <Link to="setting" className="block p-4 text-xl text-blue-500">
            Setting
          </Link>
          <Link to="help" className="block p-4 text-xl text-blue-500">
            Help
          </Link>
          <Link to="button" className="block p-4 text-xl text-blue-500">
            button
          </Link>
          <Form action="/logout" method="post">
          <button
            type="submit"
            className="block p-4 text-xl text-blue-500"
          >
            Logout
          </button>
          </Form>
          <hr />

          {data.noteListItems.length === 0 ? (
            <p className="p-4">No notes yet</p>
          ) : (
            <ol>
              {data.noteListItems.map((note) => (
                <li key={note.id}>
                  <NavLink
                    className={({ isActive }) =>
                      `block border-b p-4 text-xl ${isActive ? "bg-white" : ""}`
                    }
                    to={note.id}
                  >
                    📝 {note.title}
                  </NavLink>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="flex-1 p-6 bg-green-600 text-lg static border-2 border-black text-white font-mono rounded-md text-left w-full h-full mx-5 my-5 ">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
