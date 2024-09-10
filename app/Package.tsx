import blem from "blem";
import "@/styles/package.scss";

export type PackageKind = "library" | "tool" | "utility" | "mixed" | "fun";

export type PackageProps = {
  name: string;
  version: string;
  description: string;
  published: boolean;
  official: boolean;
  author: string;
  kind: PackageKind;
};

export const Package = ({
  name,
  description,
  published,
  official,
  version,
}: PackageProps) => {
  const bem = blem("Package");
  return (
    <div className={bem("")}>
      <header className={bem("header")}>
        <strong className={bem("name")}>{name}</strong>
        <em className={bem("version")}>{version}</em>
      </header>
      {description ? <p className={bem("description")}>{description}</p> : null}
      <div className={bem("tagbox")}>
        {official ? (
          <div className={bem("tag", ["official"])}>Official</div>
        ) : null}
        {published ? (
          <div className={bem("tag", ["published"])}>Published</div>
        ) : null}
      </div>
    </div>
  );
};

export default Package;
