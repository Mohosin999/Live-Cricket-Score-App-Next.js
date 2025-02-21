"use client";
import NavLink from "@/components/ui/NavLink";
import { usePathname } from "next/navigation";

export default function RecentLayout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Function to check if a link is active
  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <>
      <div className="flex items-center justify-center gap-10 my-6">
        <NavLink
          href="/recent-matches/international"
          label="International"
          isActive={isActive("/recent-matches/international")}
        />

        <NavLink
          href="/recent-matches/domestic"
          label="Domestic"
          isActive={isActive("/recent-matches/domestic")}
        />

        <NavLink
          href="/recent-matches/women"
          label="Women"
          isActive={isActive("/recent-matches/women")}
        />

        <NavLink
          href="/recent-matches/league"
          label="League"
          isActive={isActive("/recent-matches/league")}
        />
      </div>

      <main>{children}</main>
    </>
  );
}
