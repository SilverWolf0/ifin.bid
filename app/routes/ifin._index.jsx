import { Link } from "@remix-run/react";

export default function IfinIndexPage() {
  return (
    <p>
      <Link to="profile" className="text-blue-500 underline">     
        open profile
      </Link>
      <p>
      <Link to="dashboard" className="text-blue-500 underline">     
        open dashboard
      </Link>
    </p>
    <p>
      <Link to="apply" className="text-blue-500 underline">
        open apply Financing
      </Link>
    </p>
    <p>
      <Link to="view" className="text-blue-500 underline">
        open view application 
      </Link>
    </p>
    <p>
      <Link to="offer" className="text-blue-500 underline">
        Financing Offers
      </Link>
    </p>
    <p>
      <Link to="static" className="text-blue-500 underline">
        open analytics
      </Link>
    </p>
    <p>
      <Link to="setting" className="text-blue-500 underline">
        Setting
      </Link>
    </p>
    <p>
      <Link to="help" className="text-blue-500 underline">
        Help
      </Link>
    </p>
    </p>
    
    
  );
}
