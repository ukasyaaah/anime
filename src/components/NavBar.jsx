import Logo from "./Logo";
import Search, { NumResult } from "./Search";

export default function NavBar({ children }) {
  return (
    <nav className="nav-bar">
      <Logo />
      {children}
    </nav>
  );
}
