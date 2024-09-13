import { Fira_Code, Antonio } from "next/font/google";
import "@/Root.scss";

const fontAntonio = Antonio({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-antonio",
});

const fontFiraCode = Fira_Code({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-fira",
});
import type { AppProps } from "next/app";
import "@/Root.scss";
import "@/page-howto.scss";
import blem from "blem";

export default function MyApp({ Component, pageProps }: AppProps) {
  const bem = blem("HowToGuide");
  return (
    <main
      className={`${bem("")} ${fontAntonio.variable} ${fontFiraCode.variable} ${fontAntonio.className} ${fontFiraCode.className}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
