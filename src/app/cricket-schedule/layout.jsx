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
          href="/cricket-schedule/international"
          label="International"
          isActive={isActive("/cricket-schedule/international")}
        />

        <NavLink
          href="/cricket-schedule/domestic"
          label="Domestic"
          isActive={isActive("/cricket-schedule/domestic")}
        />

        <NavLink
          href="/cricket-schedule/women"
          label="Women"
          isActive={isActive("/cricket-schedule/women")}
        />
      </div>

      <main>{children}</main>
    </>
  );
}
