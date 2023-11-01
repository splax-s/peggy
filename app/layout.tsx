import { Urbanist } from "next/font/google";

import ModalProvider from "@/providers/modal-provider";
import ToastProvider from "@/providers/toast-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

import "@/styles/globals.css";
import "@/styles/bootstrap.min.css";
import "@/styles/elegant-icons.css";
import "@/styles/font-awesome.min.css";
import "@/styles/magnific-popup.css";
import "@/styles/nice-select.css";
import "@/styles/owl.carousel.min.css";
import "@/styles/slicknav.min.css";

const font = Urbanist({ subsets: ["latin"] });

export const metadata = {
  title: "PeggyRussel Collections",
  description: "Store - The place for all your purchases.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
