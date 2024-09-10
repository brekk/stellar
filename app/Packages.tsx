import blem from "blem";
import type { PackageProps } from "@/app/Package";
import Package from "@/app/Package";
import "@/styles/packages.scss";

export interface PackagesProps {
  packages: PackageProps[];
}

export const Packages = ({ packages }: PackagesProps) => {
  const bem = blem("Packages");
  return (
    <div className={bem("")}>
      <ul className={bem("package-listing")}>
        {packages.map((raw) => (
          <li
            key={raw.name}
            className={bem("list-item", [
              raw.published ? "published" : "unpublished",
              raw.official ? "official" : "unofficial",
            ])}
          >
            <Package {...raw} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Packages;
