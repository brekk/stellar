"use client";

import { useEffect, useState } from "react";
import blem from "blem";
import "@/styles/search.scss";
import Packages from "@/app/Packages";
import type { PackageProps } from "@/app/Package";

interface SearchbarProps {
  packages: PackageProps[]
}

export const Searchbar = ({ packages = [] }: SearchbarProps) => {
  const [$searchText, $setSearchText] = useState("");
  const [$official, $setOfficial] = useState(false);
  const [$published, $setPublished] = useState(false);
  //const [$packages, $setPackages] = useState(packages)

  const $filteredPackages = packages.filter((x) => {
    if ($published && $official) { return x.published && x.official } else if ($published) {
      return x.published
    } else if ($official) {
      return x.official
    }
    return true
  })
  const bem = blem("Searchbar");
  const toggleOfficial = () => {
    const set = !$official
    $setOfficial(set)
    //console.log("OFFICIAL?", set)
  };
  const togglePublished = () => {
    const set = !$published
    $setPublished(set)
    //console.log("PUBLISHED?", set)
  };
  return (
    <div className={bem("")}>
      <menu className={bem("menu")}>
        <label htmlFor="official" className={bem("label", ["official"])}>
          <input
            onChange={toggleOfficial}
            checked={$official}
            className={bem("input", ["checkbox", "official"])}
            type="checkbox"
            name="official"
            id="official"
          />
          Official
        </label>
        <label htmlFor="published" className={bem("label", ["published"])}>
          <input
            onChange={togglePublished}
            checked={$published}
            className={bem("input", ["checkbox", "published"])}
            type="checkbox"
            name="published"
            id="published"
          />
          Published
        </label>
        <input
          type="text"
          className={bem("input", ["text"])}
          value={$searchText}
          onChange={(e) => {
            e.preventDefault();
            $setSearchText(e.target.value);
          }}
        />
      </menu>
      <Packages packages={$filteredPackages} />
    </div>
  );
};

export default Searchbar;
