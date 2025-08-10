import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "岡本食品株式会社",
  description: "果実のちからを、もっと自由に",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
}