'use client';

import { usePathname } from 'next/navigation';
import NavbarDsktop from "../components/header/NavbarDsktop";

export default function ClientWrapper({ children }) {
  const pathname = usePathname();

  return (
    <>
      {!pathname.startsWith('/Dashbord') && <NavbarDsktop />}
      {children}
    </>
  );
}
