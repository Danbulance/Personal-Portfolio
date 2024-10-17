"use client"; // Mark this component as client-side

import { usePathname } from "next/navigation"; // To check the current path
import HeaderLayout from "./HeaderLayout";
import Footer from "../Footer";

export default function ClientHeaderFooter({ children }) {
  const pathname = usePathname(); // Get the current route

  const showHeaderAndFooter = pathname !== "/"; // Only show on subpages, not root page

  return (
    <>
      {showHeaderAndFooter && <HeaderLayout menuColors={showHeaderAndFooter} />}
      {children}
      {showHeaderAndFooter && <Footer />}
    </>
  );
}
