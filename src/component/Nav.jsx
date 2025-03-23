 import react from "react"; 
 import {Link} from "react-router-dom";

const Nav = () => {
  return (
    <>
        <ul className='Nav'>
            <li className = 'Nav-item'>
                <Link to="/">About</Link>
            </li>
            <li className = 'Nav-item'>
                <Link to="/resume">Resume</Link>
            </li>
            <li className = 'Nav-item'>
                <Link to="/portfolio">Portfolio</Link>
            </li>  
            <li className = 'Nav-item'>
                <Link to="/contact">Contact</Link>
            </li>
        </ul>
    </>
  )
}

export default Nav


