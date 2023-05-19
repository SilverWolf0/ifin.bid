import { Link } from "@remix-run/react";

export default function NoteIndexPage() {
  return (
    <p>
      No note selected. Select a note on the left, or{" "}
      <Link to="new" className="text-white underline">
        create a new note.
      </Link>
      <p>
      <Link to="profile" className="text-white underline">     
        open profile
      </Link>
    </p>
      <p>
      <Link to="dashboard" className="text-white underline">     
        open dashboard
      </Link>
    </p>
    <p>
      <Link to="apply" className="text-white underline">
        open apply Financing
      </Link>
    </p>
    <p>
      <Link to="view" className="text-white underline">
        open view application 
      </Link>
    </p>
    <p>
      <Link to="offer" className="text-white underline">
        Financing Offers
      </Link>
    </p>
    <p>
      <Link to="static" className="text-white underline">
        open analytics
      </Link>
    </p>
    <p>
      <Link to="setting" className="text-white underline">
        Setting
      </Link>
    </p>
    <p>
      <Link to="help" className="text-white underline">
        Help
      </Link>
    </p>
    </p>
    
    
  );
}
