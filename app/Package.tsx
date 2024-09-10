import blem from "blem";
import "@/styles/package.scss";
import Image from 'next/image'

export type PackageKind = 'library' | 'tool' | 'utility' | 'mixed' | 'fun';

export type PackageProps = {
  name: string;
  version: string;
  description: string;
  published: boolean;
  official: boolean;
  author: string;
  kind: PackageKind;
  togglePublished: () => void;
  toggleOfficial: () => void
};

export type TagProps = {
  name: string
  onClick: () => void
}

export const Tag = ({ name, onClick }: TagProps) => (
  <div onClick={onClick} className={blem("Package")("tag", [name.toLowerCase()])}>{name}</div>
)

export const Package = ({
  name,
  description,
  published,
  official,
  version,
  author,
  toggleOfficial,
  togglePublished
}: PackageProps) => {
  const bem = blem("Package");
  return (
    <div className={bem("")}>
      <header className={bem("header")}>
        <strong className={bem("name")}>{name}</strong>
        <em className={bem("version")}>{version}</em>
      </header>
      {description ? <p className={bem("description")}>{description}</p> : null}
      <footer className={bem("footer")}>
        <Image
          src={`/avatar-${author}.png`}
          className={bem("avatar")}
          alt={author}
          width={24}
          height={24}
        />
        <div className={bem("tagbox")}>
          {official ? (
            <Tag name="Official" onClick={toggleOfficial} />
          ) : null}
          {published ? (
            <Tag name="Published" onClick={togglePublished} />
          ) : null}
        </div>
      </footer>
    </div>
  );
};

export default Package;
