import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { ClerkProvider,} from '@clerk/nextjs'
import { Toaster } from "react-hot-toast";
import { Analytics } from '@vercel/analytics/next';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Petify",
  description: "Adopt - Donate",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                zIndex: 9999, 
              },
            }}
          />
        <div className="relative min-h-screen bg-[#f0faff] overflow-x-hidden flex flex-col">
          {/* <MouseMoveEffect /> */}
          <div className=" z-0 fixed inset-0">
            <div className="absolute inset-0 bg-[#f0faff] " />
            <div className="absolute right-0 top-0 h-[500px] w-[500px] bg-purple-500/30 blur-[100px]" />
            <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-[#ceefce] blur-[100px]" />
            </div>
            <Navbar />
            <main className="flex items-center z-10 justify-center min-h-screen">{children}
              <Analytics />
            </main>
          <Footer />
         
        </div>
      </body>
      </html>
    </ClerkProvider>
  );
}
