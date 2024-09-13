import PagePackage from "@/app/PagePackages";
import Nav from "@/app/Nav";
import blem from "blem";
import "@/app/page.scss";

export default function Home() {
  const bem = blem("home");
  return (
    <main className={`${bem("")}`}>
      <Nav />
      <PagePackage />
    </main>
  );
}
