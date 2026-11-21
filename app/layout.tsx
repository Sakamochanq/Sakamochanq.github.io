import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sakamochan のページ",
  description: "やわらかく、シンプルな日本語のページです。",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
