import Logo from "@/app/Logo";
import Searchbar from "@/app/Searchbar";
import blem from "blem";
import "@/app/page.scss";

const PACKAGES = [
  {
    name: "madmarkdown-parser",
    official: true,
    published: true,
    author: "madlib-lang",
    version: "0.0.6",
    description: "markdown parser written in madlib",
    kind: "library",
  },
  {
    name: "party-bus",
    official: false,
    published: true,
    author: "brekk",
    version: "0.0.3",
    description: "Conditional tagged logging and side-effects",
    kind: "library",
  },
  {
    name: "gambit",
    official: false,
    published: false,
    author: "brekk",
    version: "0.0.3",
    description: "French-suited playing card library",
    kind: "library",
  },
  {
    name: "mad-creatures",
    official: false,
    published: false,
    author: "brekk",
    version: "0.0.1",
    description: "Random seeded creature simulation",
    kind: "fun",
  },
];

export default function Home() {
  const bem = blem("home")
  return (
    <main className={`${bem("")}`}>
      <Logo animate className={bem("logo", ["medium"])} />
      <Searchbar packages={PACKAGES} />
    </main>
  );
}
