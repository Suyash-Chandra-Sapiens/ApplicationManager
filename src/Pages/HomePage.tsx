import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
    <h1><u>Journey List</u></h1>
      <ul>
        <li>
          <strong><Link to="/fleet">fleet</Link></strong>
        </li>
        <li>
          <strong><Link to="/HomeOwner?policyExternalNumber=PL-HMP0001078976%2F00">homeowner</Link></strong>
          {/* <strong><Link to="/HomeOwner">HomeOwner</Link></strong> */}

        </li>
      </ul>
    </>
  );
}
