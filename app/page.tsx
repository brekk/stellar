"use client";

import Logo from "@/app/Logo";
import { useState } from "react";
import Searchbar from "@/app/Searchbar";
import blem from "blem";
import "@/app/page.scss";
import Packages from "@/app/Packages";

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
  const bem = blem("home");
  const [$search, $setSearch] = useState("");
  const [$official, $setOfficial] = useState(false);
  const [$published, $setPublished] = useState(false);

  const filteredPackages = PACKAGES.filter((x) => {
    if ($published && $official) {
      return x.published && x.official;
    } else if ($published) {
      return x.published;
    } else if ($official) {
      return x.official;
    }
    return true;
  });
  const toggleOfficial = () => {
    const set = !$official;
    $setOfficial(set);
    //console.log("OFFICIAL?", set)
  };
  const togglePublished = () => {
    const set = !$published;
    $setPublished(set);
    //console.log("PUBLISHED?", set)
  };
  return (
    <main className={`${bem("")}`}>
      <Logo animate className={bem("logo", ["medium"])} />
      <Searchbar
        toggleOfficial={toggleOfficial}
        official={$official}
        togglePublished={togglePublished}
        published={$published}
        search={$search}
        setSearch={$setSearch}
      />
      <Packages
        togglePublished={togglePublished}
        toggleOfficial={toggleOfficial}
        packages={filteredPackages}
      />
    </main>
  );
}
