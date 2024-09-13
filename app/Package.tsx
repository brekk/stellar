import blem from "blem";
import "@/Package.scss";
import Link from "next/link";
import RepoGithub from "@/assets/icon-github.svg";
import RepoGitlab from "@/assets/icon-gitlab.svg";
import RepoIcon from "@/assets/icon-repo.svg";
import Image from "next/image";

export type PackageKind = "library" | "tool" | "fun" | "plugin";

export interface RawPackageProps {
  name: string;
  repo: string;
  version: string;
  description: string;
  published: boolean;
  official: boolean;
  author: string;
  kind: string;
}

export interface PackageProps extends RawPackageProps {
  kind: PackageKind;
}

export interface AugmentedPackageProps extends PackageProps {
  togglePublished: () => void;
  toggleOfficial: () => void;
};

export type TagProps = {
  name: string;
  onClick: () => void;
};

export const Tag = ({ name, onClick }: TagProps) => (
  <div
    onClick={onClick}
    className={blem("Package")("tag", [name.toLowerCase()])}
  >
    {name}
  </div>
);

export const Package = ({
  name,
  description,
  published,
  official,
  version,
  repo,
  author,
  toggleOfficial,
  togglePublished,
}: AugmentedPackageProps) => {
  const [repoicon, Icon] = repo.includes("github")
    ? ["github", RepoGithub]
    : repo.includes("gitlab")
      ? ["gitlab", RepoGitlab]
      : ["repo", RepoIcon];
  const bem = blem("Package");
  return (
    <div className={bem("")}>
      <header className={bem("header")}>
        <strong className={bem("name")}>{name}</strong>
        {version ? <em className={bem("version")}>v{version}</em> : null}
      </header>
      <div className={bem("content")}>
        {description ? (
          <p className={bem("description")}>{description}</p>
        ) : null}
        <a href={repo} className={bem("link", ["repo"])}>
          <Icon className={bem("repo", [repoicon])} />
        </a>
      </div>
      <footer className={bem("footer")}>
        <div className={bem("authorbox")}>
          <Link href={`/author/${author}`} className={bem("link", ["author"])}>
            <Image
              src={`/avatar-${author}.png`}
              className={bem("avatar")}
              alt={author}
              width={24}
              height={24}
            />
            <span className={bem("author-text")}>{author}</span>
          </Link>
        </div>
        <div className={bem("tagbox")}>
          {official ? <Tag name="Official" onClick={toggleOfficial} /> : null}
          {published ? (
            <Tag name="Published" onClick={togglePublished} />
          ) : null}
        </div>
      </footer>
    </div>
  );
};

export default Package;
