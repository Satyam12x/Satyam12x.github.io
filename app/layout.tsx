import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import UnavailableToast from "@/components/UnavailableToast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Satyam Pandey - Portfolio",
  description:
    "Personal portfolio of Satyam Pandey. Developer, builder, and lifelong learner.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-sans bg-white text-charcoal antialiased">
        {children}
        <UnavailableToast />
      </body>
    </html>
  );
}
