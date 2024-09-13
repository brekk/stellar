import blem from "blem";
import Logo from "@/components/logo";
import "@/components/nav/style.scss";

export const Nav = () => {
  const bem = blem("Nav");

  return (
    <nav className={bem("")}>
      <Logo animate className={bem("logo")} size="small" />
      <strong className={bem("title")}>Packages</strong>
    </nav>
  );
};

export default Nav;
