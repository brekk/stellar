import blem from "blem";
import type { RawPackage, PackageKind } from "@/components/package/types";
import Package from "@/components/package";
import "@/components/package/all.scss";

export interface PackagesProps {
  togglePublished: () => void;
  toggleOfficial: () => void;
  packages: RawPackage[];
}

export const Packages = ({
  togglePublished,
  toggleOfficial,
  packages,
}: PackagesProps) => {
  const bem = blem("Packages");
  return (
    <div className={bem("")}>
      {packages.length > 0 ? (
        <ul className={bem("package-listing")}>
          {packages.map((raw) => (
            <li
              key={raw.name}
              className={bem("list-item", [
                `${!raw.published ? "un" : ""}published`,
                `${!raw.official ? "un" : ""}official`,
              ])}
            >
              <Package
                {...raw}
                kind={raw.kind as PackageKind}
                togglePublished={togglePublished}
                toggleOfficial={toggleOfficial}
              />
            </li>
          ))}
        </ul>
      ) : (
        <div className={bem("no-packages")}>
          No matching packages found.
          <br />
          Try changing your search parameters.
        </div>
      )}
    </div>
  );
};

export default Packages;
