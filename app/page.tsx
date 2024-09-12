import PagePackage from "@/app/PagePackages";
import blem from "blem";
import "@/app/page.scss";

export default function Home() {
  const bem = blem("home");
  return (
    <main className={`${bem("")}`}>
      <PagePackage />
    </main>
  );
}
