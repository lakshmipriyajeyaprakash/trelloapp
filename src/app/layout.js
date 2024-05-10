import { Outfit } from "next/font/google";
import "./globals.css";
import TopBar from "./Components/TopBar";
import SideBar from "./Components/SideBar";
import ReduxProvider from "./lib/ReduxProvider";

const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "Trello App",
  description: "Task Management next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>
          <div className="min-w-full min-h-screen bg-blue-100">
            <TopBar />
            <SideBar />
            {children}
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
