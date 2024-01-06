import './index.css'

const Header = () => (
  <nav className="header">
    <h1 className="name">PVS Vibhin</h1>
    <ul>
      <li>
        <a href="#about" className="nav">
          About
        </a>
      </li>
      <li>
        <a className="nav" href="#projects">
          Projects
        </a>
      </li>
      <li>
        <a className="nav" href="#contact">
          Contacts
        </a>
      </li>
    </ul>
  </nav>
)

export default Header
