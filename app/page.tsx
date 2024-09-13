import PagePackage from "@/PagePackages";
import Nav from "@/components/nav";
import blem from "blem";
import "@/page.scss";

export default function Home() {
  const bem = blem("home");
  return (
    <main className={`${bem("")}`}>
      <Nav />
      <PagePackage />
    </main>
  );
}
