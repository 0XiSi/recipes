import {USERNAME} from "../constants.js";


function Header() {
  const username = localStorage.getItem(USERNAME)

  return(
    <div>
      <h2>
        Hello <label style={{ textDecoration:"underline" }}>{username}</label>
      </h2>
      <hr/>
    </div>
  )
}

export default Header
