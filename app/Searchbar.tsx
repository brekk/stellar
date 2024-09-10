import { useEffect, useState } from "react";
import blem from "blem";
import "@/styles/search.scss";
import Packages from "@/app/Packages";
import type { PackageProps } from "@/app/Package";

interface SearchbarProps {
  toggleOfficial: () => void,
  togglePublished: () => void,
  official: boolean,
  published: boolean,
  search: string,
  setSearch: (x: string) => void
}

export const Searchbar = ({ toggleOfficial, official, togglePublished, published, search, setSearch }: SearchbarProps) => {

  const bem = blem("Searchbar");
  return (
    <div className={bem("")}>
      <menu className={bem("menu")}><div className={bem("toggles")}>
        <label htmlFor="official" className={bem("label", ["official"])}>
          <input
            onChange={toggleOfficial}
            checked={official}
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
            checked={published}
            className={bem("input", ["checkbox", "published"])}
            type="checkbox"
            name="published"
            id="published"
          />
          Published
        </label>
      </div>
        <input
          type="text"
          className={bem("input", ["text"])}
          value={search}
          onChange={(e) => {
            e.preventDefault();
            setSearch(e.target.value);
          }}
        />
      </menu>
    </div>
  );
};

export default Searchbar;
