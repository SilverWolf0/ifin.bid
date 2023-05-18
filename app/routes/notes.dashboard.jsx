import { Link } from "@remix-run/react";

export default function dashboard() {
  return (
    
    <div>
      <h1 className="text-3xl font-bold"> Dashboard</h1>
      <div className="bg-green-600 text-lg static border-2 border-black text-white font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <Link to="/notes/offer" >
          Bank Offers
        </Link>
        </div>
        <div className="bg-green-600 text-lg static border-2 border-black text-white font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
          <p><Link to="/notes/view">Approved Offers</Link></p>
        </div>
        <div className="bg-green-600 text-lg static border-2 border-black text-white font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>closed Financing</p>
        </div>
        <div className="bg-green-600 text-lg static border-2 border-black text-white font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>Financing Summary</p>
        </div>
        <div className="bg-green-600 text-lg static border-2 border-black text-white font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>Month Payment Tracker</p>
        </div>
        <div className="bg-green-600 text-lg static border-2 border-black text-white font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>Credit Score</p>
        </div>
        <div className="bg-green-600 text-lg static border-2 border-black text-white font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>Transaction History</p>
        </div>
    </div>
    
  );
}
