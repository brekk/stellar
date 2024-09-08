import Logo from "@/app/Logo";
import blem from "blem";
import "@/app/page.scss";

export default function Home() {
  const bem = blem("home")
  return (
    <main className={`${bem("")}`}>
      <Logo animate className={bem("logo", ["medium"])} />
    </main>
  );
}
