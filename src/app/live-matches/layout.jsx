"use client";
import NavLink from "@/components/ui/NavLink";
import { usePathname } from "next/navigation";

export default function Layout({ children }) {
  const pathname = usePathname(); // Get the current path

  // Function to check if a link is active
  const isActive = (href) => {
    return pathname === href;
  };

  return (
    <>
      <div className="flex items-center justify-center gap-10 my-6">
        <NavLink
          href="/live-matches/international"
          label="International"
          isActive={isActive("/live-matches/international")}
        />

        <NavLink
          href="/live-matches/domestic"
          label="Domestic"
          isActive={isActive("/live-matches/domestic")}
        />

        <NavLink
          href="/live-matches/women"
          label="Women"
          isActive={isActive("/live-matches/women")}
        />

        <NavLink
          href="/live-matches/league"
          label="League"
          isActive={isActive("/live-matches/league")}
        />
      </div>

      <main>{children}</main>
    </>
  );
}
