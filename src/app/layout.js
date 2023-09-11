import NavBar from "@/components/NavBar";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Footer from "@/components/Footer";

const playfairDisplay = Playfair_Display({ subsets: ["latin"] });
export const metadata = {
  title: "Rooted Birth Services",
  description:
    "A birth doula is a professional trained in labor support. Doulas provide informational, emotional, and physical support for pregnant, birthing, and postpartum families.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body
          className={`m-0 ${playfairDisplay.className} bg_pearl [word-spacing:.05rem]`}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
