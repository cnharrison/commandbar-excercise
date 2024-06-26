import { Inter } from "next/font/google";
import "./globals.css";
import CommandBar from "./components/CommandBar";
import { ClickProvider } from "./context/ClickContext";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClickProvider>{children}</ClickProvider>
        <CommandBar />
      </body>
    </html>
  );
}