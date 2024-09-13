import blem from "blem";
import "@/components/search/style.scss";
import Telescope from "@/assets/icon-telescope.svg";

interface SearchbarProps {
  toggleOfficial: () => void;
  togglePublished: () => void;
  official: boolean;
  published: boolean;
  search: string;
  setSearch: (x: string) => void;
  setKind: (x: number) => void;
  packageKinds: string[];
}

export const Searchbar = ({
  official,
  packageKinds,
  published,
  search,
  setKind,
  setSearch,
  toggleOfficial,
  togglePublished,
}: SearchbarProps) => {
  const bem = blem("Searchbar");
  return (
    <div className={bem("")}>
      <menu className={bem("menu")}>
        <div
          className={bem("search-wrapper", [
            search == "" ? "waiting" : "searching",
          ])}
        >
          <div className={bem("search-icon-wrapper")}>
            <Telescope className={bem("search-icon")} alt="Search" />
          </div>
          <input
            type="text"
            className={bem("search")}
            placeholder="Search Packages"
            id="search-field"
            onChange={(e) => {
              e.preventDefault();
              setSearch(e.target.value);
            }}
          />
        </div>
        <div className={bem("filters")}>
          <label htmlFor="kind" className={bem("label", ["select", "kind"])}>
            <span className={bem("label-text")}>Kind</span>
            <select
              id="kind"
              name="kind"
              className={bem("select", ["kind"])}
              onChange={(e) => setKind(parseInt(e.target.value))}
              defaultValue={0}
            >
              {packageKinds.map((k, i) => (
                <option value={i} key={k + "-" + i}>
                  {k}
                </option>
              ))}
            </select>
          </label>
          <label
            htmlFor="official"
            className={bem("label", ["checkbox", "official"])}
          >
            <input
              onChange={toggleOfficial}
              checked={official}
              className={bem("input", ["checkbox", "official"])}
              type="checkbox"
              name="official"
              id="official"
            />
            <span className={bem("label-text")}>Official</span>
          </label>
          <label
            htmlFor="published"
            className={bem("label", ["checkbox", "published"])}
          >
            <input
              onChange={togglePublished}
              checked={published}
              className={bem("input", ["checkbox", "published"])}
              type="checkbox"
              name="published"
              id="published"
            />
            <span className={bem("label-text")}>Published</span>
          </label>
        </div>
      </menu>
    </div>
  );
};

export default Searchbar;
