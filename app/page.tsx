"use client";

import Logo from "@/app/Logo";
import { useState } from "react";
import Searchbar from "@/app/Searchbar";
import blem from "blem";
import "@/app/page.scss";
import Packages from "@/app/Packages";

import PACKAGES from "@/app/packages.json"

const PACKAGE_KINDS = [
  "All",
  "Library",
  "Tool",
  "Fun",
  "Plugin",
]

export default function Home() {
  const bem = blem("home");
  const [$search, $setSearch] = useState("");
  const [$official, $setOfficial] = useState(false);
  const [$published, $setPublished] = useState(false);
  const [$kind, $setKind] = useState(0);
  const filteredPackages = PACKAGES.filter((x) => {
    if ($search) {
      const s = $search.toLowerCase()
      return x.name.toLowerCase().includes(s) ||
        x.description.toLowerCase().includes(s)
    }
    return true
  }).filter((x) => {
    if ($kind !== 0) {
      return x.kind === PACKAGE_KINDS[$kind].toLowerCase()
    }
    return true
  }).filter((x) => {
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
  };
  const togglePublished = () => {
    const set = !$published;
    $setPublished(set);
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
        packageKinds={PACKAGE_KINDS}
        setKind={$setKind}
      />
      <Packages
        togglePublished={togglePublished}
        toggleOfficial={toggleOfficial}
        packages={filteredPackages}
      />
    </main>
  );
}
