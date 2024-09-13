//import Layout from '@/app/layout'
import type { AppProps } from "next/app";
import "@/Root.scss";
import "@/HowTo.scss"
import blem from "blem";

export default function MyApp({ Component, pageProps }: AppProps) {
  const bem = blem("HowToGuide")
  return (
    <main className={bem("")}>
      <Component {...pageProps} />
    </main>
  )
}
