import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-sm mx-0 px-24">
      <div className="flex-1">
        <Link href={"/"} className="btn btn-ghost text-xl">
          Stock Prediction App
        </Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 ">
          <Link href={"/login"} className="btn btn-outline btn-accent ">
            Login
          </Link>
          <li>
            <Link href={"/register"} className="btn btn-accent ml-2">
              Register
            </Link>
          </li>
          <li></li>
        </ul>
      </div>
    </div>
  );
}
