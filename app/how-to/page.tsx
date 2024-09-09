import Logo from "@/app/Logo";
import blem from "blem";
import "@/app/page.scss";
import type { ReactNode } from "react"

interface HowToProps {
  children: ReactNode
}

export default function Home({ children }: HowToProps) {
  const bem = blem("home")
  return (
    <main className={`${bem("")}`}>
      <Logo animate className={bem("logo", ["medium"])} />
      {children}
    </main>
  );
}
