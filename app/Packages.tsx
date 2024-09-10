import blem from "blem";
import type { PackageProps } from "@/app/Package";
import Package from "@/app/Package";
import "@/styles/packages.scss";

export interface PackagesProps {
  togglePublished: () => void;
  toggleOfficial: () => void;
  packages: PackageProps[];
}

export const Packages = ({
  togglePublished,
  toggleOfficial,
  packages,
}: PackagesProps) => {
  const bem = blem("Packages");
  return (
    <div className={bem("")}>
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
              togglePublished={togglePublished}
              toggleOfficial={toggleOfficial}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Packages;
