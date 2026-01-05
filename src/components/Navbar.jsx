import "../styles/Navbar.css";
import { House, FileText, Folder } from "phosphor-react";

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="nav">
      <button className="nav-btn">
        {" "}
        <House size={24} />
      </button>
      <button className="nav-btn">
        {" "}
        <FileText size={24} />
      </button>
      <button className="nav-btn">
        {" "}
        <Folder size={24} />
      </button>

      <div className="nav-divider" />
      <ThemeToggle />
    </nav>
  );
}
