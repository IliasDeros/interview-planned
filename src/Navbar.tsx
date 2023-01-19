import React from "react"
import Logo from "./assets/logo.svg"
import { LOGO_LINK } from "./constants"

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <a href={LOGO_LINK}>
            <img src={Logo} alt="Logo" />
          </a>
        </li>
        <li><strong>Planned test</strong></li>
      </ul>
    </nav>
  )
}

export default Navbar
