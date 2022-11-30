import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <ul>
        <li>
          <Link to="/fleet">Fleet</Link>
        </li>
        <li>
          <Link to="/HomeOwner?userType=agent&policyExternalNumber=PL-HMP0001078976%2F00">HomeOwner</Link>
        </li>
      </ul>
    </>
  );
}
