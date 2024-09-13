"use client";
import type { Dispatch, SetStateAction } from "react"
import { useState } from "react";
import Searchbar from "@/components/search";
import Packages from "@/components/package/all";
import type { RawPackage } from "@/components/package/types"
import { toLower } from "ramda";

import PACKAGES from "@/data/packages.json";

const PACKAGE_KINDS = ["All", "Library", "Tool", "Fun", "Plugin"];

const filterBySearch = (search: string) => ({ name = "", description = "" }: RawPackage) => {
  if (search) {
    const s = toLower(search);
    return (
      toLower(name).includes(s) ||
      toLower(description).includes(s)
    );
  }
  return true;
}

const filterByKind = (k: number) => ({ kind }: RawPackage) => {
  if (k !== 0) {
    return kind === toLower(PACKAGE_KINDS[k])
  }
  return true;
}

const filterByChecks = (official: boolean, published: boolean) => ({ published: p, official: o }: RawPackage) => {
  if (published && official) {
    return p && o
  } else if (published) {
    return p
  } else if (official) {
    return o
  }
  return true;
}

const makeToggle = (value: boolean, set: Dispatch<SetStateAction<boolean>>) => () => set(!value)

export default function Home() {
  const [$search, $setSearch] = useState("");
  const [$official, $setOfficial] = useState(false);
  const [$published, $setPublished] = useState(false);
  const [$kind, $setKind] = useState(0);
  const filteredPackages = PACKAGES.filter(filterBySearch($search))
    .filter(filterByKind($kind))
    .filter(filterByChecks($official, $published));
  const toggleOfficial = makeToggle($official, $setOfficial)
  const togglePublished = makeToggle($published, $setPublished);

  return (
    <>
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
    </>
  );
}
