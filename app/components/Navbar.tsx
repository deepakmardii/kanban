"use client";

import { UserButton } from "@clerk/nextjs";
import { PiKanban } from "react-icons/pi";
import { useSession } from "@clerk/nextjs";
import Link from "next/link";

const Navbar = () => {
  const { isSignedIn } = useSession();

  return (
    <div className="py-5 bg-transparent relative z-10 w-full">
      <div className="flex justify-between w-[90%] max-w-[1450px] mx-auto">
        <Link
          href={"/"}
          className="flex gap-1 items-center text-2xl font-bold uppercase"
        >
          <h1>My Kanban</h1>
          <PiKanban />
        </Link>

        <div className="flex items-center gap-5">
          <UserButton afterSignOutUrl="/" />
          <span>ThemeSwitch</span>
        </div>
        {!isSignedIn && (
          <Link href={"/sign-in"} className="tracking-tight hover:underline">
            Already a member? Sign In &#8594;
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
