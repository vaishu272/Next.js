import { Roboto, Work_Sans } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
});

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Introduction",
  description: "Learn the basics of Next.js with this introduction.",
  keywords: ["Next.js", "React", "JavaScript", "Web Development"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${roboto.variable} ${workSans.variable} h-full`}
    >
      <body>{children}</body>
    </html>
  );
}
