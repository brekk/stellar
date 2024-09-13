export type PackageKind = "library" | "tool" | "fun" | "plugin";

export interface RawPackage {
  name: string;
  repo: string;
  version: string;
  description: string;
  published: boolean;
  official: boolean;
  author: string;
  kind: string;
}

export interface Package extends RawPackage {
  kind: PackageKind;
}

export interface AugmentedPackage extends Package {
  togglePublished: () => void;
  toggleOfficial: () => void;
};

export type Tag = {
  name: string;
  onClick: () => void;
};
