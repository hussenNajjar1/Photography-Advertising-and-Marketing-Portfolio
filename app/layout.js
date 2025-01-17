import { Inter } from "next/font/google";
import "./globals.css";
import NavbarDsktop from "../components/header/NavbarDsktop";
import Footer from "../components/Footer";
import ClientWrapper from "./ClientWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: 'Hero',
    template: 'Hero | %s '
  },
  description: "Generated by create next app",
  icon: './img_login.png'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
          {children}
        </ClientWrapper>
        <Footer />
      </body>
    </html>
  );
}
