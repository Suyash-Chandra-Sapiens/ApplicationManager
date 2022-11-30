import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <ul>
        <li>
          <strong><Link to="/fleet">Fleet</Link></strong>
          
        </li>
        <li>
          <strong><Link to="/HomeOwner?userType=agent&policyExternalNumber=PL-HMP0001078976%2F00">HomeOwner</Link></strong>
        </li>
      </ul>
    </>
  );
}
