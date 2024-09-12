import Link from "next/link";
import { Button } from "../ui/button";

const Navbar = async () => {

  return (
    <nav className="flex justify-around items-center py-4 bg-[#141414] text-white">
      <Link href="/" className="text-xl font-bold">
        Hi there 👋 
      </Link>
            <li>
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-gray-400">
                Register
              </Link>
            </li>
           
          
            <li>
              <Link href="/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
      </li>
    </nav>
  );
};

export default Navbar;