import "@/root.scss";
import type { AppProps } from "next/app";
import "@/page-howto.scss";
import blem from "blem";
import fonts from "@/styles/fonts"

export default function MyApp({ Component, pageProps }: AppProps) {
  const bem = blem("HowToGuide");
  return (
    <main
      className={`${bem("")} ${fonts}`}
    >
      <Component {...pageProps} />
    </main>
  );
}
