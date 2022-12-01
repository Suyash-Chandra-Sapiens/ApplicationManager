import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
    <h1><u>Journey List</u></h1>
      <ul>
        <li>
          <strong><Link to="/fleet">Fleet</Link></strong>
        </li>
        <li>
          <strong><Link to="/HomeOwner">HomeOwner</Link></strong>
        </li>
      </ul>
    </>
  );
}
