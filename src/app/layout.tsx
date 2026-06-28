import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "AI Directory | Find the Best AI Tools Before Everyone Else",
  description: "Discover the best AI tools, automation workflows, coding assistants, business AI software, and productivity systems used by top Silicon Valley startups.",
  keywords: ["AI tools", "Artificial Intelligence", "Automation", "Productivity", "Machine Learning"],
  openGraph: {
    title: "AI Directory | Premium AI Tools & Workflows",
    description: "Discover the best AI tools and workflows used by top Silicon Valley startups.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <head>
        <meta name="monetag" content="3b3c89d9074128b75f25fae8a8aa5e4a" />
        <script src="https://quge5.com/88/tag.min.js" data-zone="254285" async data-cfasync="false"></script>
        <link rel="canonical" href="https://yourdomain.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Header />
          <main className="flex-1 pt-20">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
