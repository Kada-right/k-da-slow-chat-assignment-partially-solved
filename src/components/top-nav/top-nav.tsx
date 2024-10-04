import Link from "next/link";

export function TopNav() {
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">E-Letter</a>
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal">
          <li>
            <Link href="/">Chat</Link>
          </li>
          <li></li>
          <li>
            <Link href="/statistics">Statistics</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end"> </div>
    </div>
  );
}
