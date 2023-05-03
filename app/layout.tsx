import "./globals.css";
import { Inter, Lato, Bebas_Neue, Noto_Sans } from "next/font/google";
import LayoutWrapper from "../components/main/LayoutWrapper";
import { MainHeader } from "../components/main/MainHeader";
import Footer from "../components/main/Footer";
import footerData from "../data/footer";
import { CallToAction } from "../components/public/CallToAction";

export const metadata = {
  title: "Geleza - Home",
  description:
    "Revolutionizing High School Education with AI Technology: Experience it Now!",
};

const font = Noto_Sans({
  subsets: ["latin"],
  weight: "400",
});
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={font.className}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <LayoutWrapper>
          <MainHeader />
          <main className="pt-16 h-full min-h-[50vh]">{children}</main>
          <CallToAction />
          <Footer data={footerData} />
        </LayoutWrapper>
      </body>
    </html>
  );
}
