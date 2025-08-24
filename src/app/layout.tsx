import type { Metadata } from "next";
import {ThemeProvider} from "next-themes";
import "./globals.css";
import Header from "@/components/header/header";

export const metadata: Metadata = {
  title: "Speed Type",
  description: "Test your speed",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body>
        <ThemeProvider attribute={"class"} defaultTheme="system" enableSystem>
          <Header></Header>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
