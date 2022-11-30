import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <>
      <ul>
        <li>
          <Link to="/fleet">Fleet</Link>
        </li>
        <li>
          <Link to="/HomeOwner">HomeOwner</Link>
        </li>
      </ul>
    </>
  );
}
