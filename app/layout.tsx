import type { Metadata } from "next";
import { Fira_Code, Antonio } from "next/font/google";
import "./styles/root.scss";


const fontAntonio = Antonio({
  subsets: ['latin'],
  display: 'swap',
  weight: "100"
})

const fontFiraCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

export const metadata: Metadata = {
  title: "Madlib",
  description: "A language designed to delight"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontAntonio.className} ${fontFiraCode.className}`}>
        {children}
      </body>
    </html >
  );
}
