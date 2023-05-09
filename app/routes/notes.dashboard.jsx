import { Link } from "@remix-run/react";

export default function dashboard() {
  return (
    
    <div>
      <h1 className="text-2xl font-bold"> Dashboard</h1>
<Link
  to="/notes/offer"
>
  Bank Offers
</Link>
<p><Link to="/notes/view">Approved Offers</Link></p>
      
      <p>closed Financing</p>
      <p>Financing Summary</p>
      <p>Month Payment Tracker</p>
      <p>Credit Score</p>
      <p>Transaction History</p>
    </div>
    
  );
}
