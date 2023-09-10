import NavBar from "@/app/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playFairDisplay = Playfair_Display({ subsets: ["latin"] });
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
          className={`m-0 ${inter.className} bg_pearl [word-spacing:.05rem]`}
          style={{
            fontFamily: `${playFairDisplay.className}`,
          }}
        >
          <NavBar />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
