import NavBar from "@/app/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/app/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Rooted Birth Services",
  description:
    "A birth doula is a professional trained in labor support. Doulas provide informational, emotional, and physical support for pregnant, birthing, and postpartum families.",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body
          className={`margin-0 ${inter.className} bg_pearl`}
          style={{
            fontFamily: "Moon",
            wordSpacing: "-.32rem",
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
