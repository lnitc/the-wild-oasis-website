import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({ subsets: ["latin"], display: "swap" });

import "@/app/_styles/globals.css";

export const metadata = {
  title: {
    template: "%s  / The Wild Oasis",
    default: " Welcome / The Wild Oasis",
    description: "Luxurious cabin hotel, located in the middle of the nature",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-primary-950 text-primary-100 min-h-screen ${josefin.className}`}
      >
        <Logo />
        <Navigation />
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
