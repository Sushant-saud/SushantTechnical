import React,{Link} from 'react'

function Navbar() {
  return (
    <>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">contact</Link></li>
        <li><Link to="/user/anil">UserAnil</Link></li>
        <li><Link to="/user/peter">UserPeter</Link></li>
    </ul>
    </>
  )
}

export default Navbar