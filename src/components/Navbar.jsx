import '../styles/Navbar.css'

import { Icon } from "@iconify/react";



export default function Navbar() {
  return (
    <nav className="nav">
      <button className="nav-btn">     <Icon
                icon="mdi:home"
                width="24"
                height="24"
                style={{ color: "#000" }}
              /></button>
      <button className="nav-btn">     <Icon
                icon="mdi:document"
                width="24"
                height="24"
                style={{ color: "#000" }}
              /></button>
      <button className="nav-btn">     <Icon
                icon="mdi:file"
                width="24"
                height="24"
                style={{ color: "#000" }}
              /></button>

      <div className="nav-divider" />

      <button className="nav-btn">     <Icon
                icon="mdi:mood"
                width="24"
                height="24"
                style={{ color: "#000" }}
              /></button>
    </nav>
  )
}
