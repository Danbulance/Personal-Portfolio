import Head from "next/head";
import "./globals.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ClientHeaderFooter from "./components/layout/ClientHeaderFooter";
import Script from "next/script";

gsap.registerPlugin(ScrollTrigger);

export const metadata = {
  title: "Dan Letch Portfolio",
  description: "My personal portfolio site describing myself and my work",
};

export default function RootLayout({ children }) {
  return (
    <html id="page-code" lang="en">
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </Head>
      <body className="antialiased">
        <Script src="https://www.google.com/recaptcha/api.js?render=6LcJvG4qAAAAADJVFvfh_X5pawFIHmCb4LH8rjIj" strategy="lazyOnload" />

        <Script id="recaptcha-onSubmit" strategy="lazyOnload">
          {`
            function onSubmit() {
              document.getElementById("myForm").submit();
            }
          `}
        </Script>

        <ClientHeaderFooter>{children}</ClientHeaderFooter>
      </body>
    </html>
  );
}
