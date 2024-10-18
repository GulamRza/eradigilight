import type { Metadata } from "next";
import "./globals.css";
import _App from "./_App";


export const metadata: Metadata = {
  title: {
    default: "EraDigiLight",
    template: "%s - EraDigiLight"
  },
  description: "EraDigiLight Digital Marketing is a forward-thinking agency specializing in innovative online marketing strategies. With expertise in SEO, social media management, content creation, and paid advertising, we help businesses amplify their online presence, engage their target audience, and achieve measurable growth. Our dedicated team combines creativity with data-driven insights to deliver personalized marketing solutions that drive results and elevate brands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <link
        rel="icon"
        href="favicons/icon-white.png"
        type="image/<generated>"
        sizes="<generated>"
      />
      </head>
      <body>
        <_App>
          {children}
        </_App>
      </body>
    </html>
  );
}
