import { Link } from "@remix-run/react";

export default function dashboard() {
  return (
    
    <div>
      <h1 className="text-3xl font-bold"> Dashboard</h1>
        <Link to="/notes/offer" >
          <div className="bg-white text-lg static border-2 border-black text-black font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
          Bank Offers
          </div>
        </Link>

        <Link to="/notes/view">
          <div className="bg-white text-lg static border-2 border-black text-black font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
            <p>Approved Offers</p>
          </div>
        </Link>
        
        <div className="bg-white text-lg static border-2 border-black text-black font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>closed Financing</p>
        </div>
        <div className="bg-white text-lg static border-2 border-black text-black font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>Financing Summary</p>
        </div>
        <div className="bg-white text-lg static border-2 border-black text-black font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>Month Payment Tracker</p>
        </div>
        <div className="bg-white text-lg static border-2 border-black text-black font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>Credit Score</p>
        </div>
        <div className="bg-white text-lg static border-2 border-black text-black font-mono rounded-md text-center w-64 h-10 mx-5 my-5 ">
        <p>Transaction History</p>
        </div>
    </div>
    
  );
}
