import '../styles/Navbar.css'


export default function Navbar() {
  return (
    <nav className="nav">
      <button className="nav-btn">🏠</button>
      <button className="nav-btn">📄</button>
      <button className="nav-btn">📁</button>

      <div className="nav-divider" />

      <button className="nav-btn">☀️</button>
      <span className="nav-lang">EN</span>
    </nav>
  )
}
