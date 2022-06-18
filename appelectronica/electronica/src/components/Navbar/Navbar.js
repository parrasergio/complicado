//import './NavBar.css'
import CartWidgets from "../CartWidget/CartWidget"
import { Link, NavLink } from 'react-router-dom'
const NavBar = () => {
    return (
        <nav style={{ display: 'center'}}>
             <Link to='/'>
                <h1>Productos</h1>
             </Link>
              <div>
                <h3><NavLink to='/category/monitores' className='option'>monitores</NavLink></h3>
                <h3><NavLink to='/category/coolers' className='option'>Coolers</NavLink></h3>
                <h3><NavLink to='/category/gabinetes' className='option'>Gabinetes</NavLink></h3>
              </div>
                    <CartWidgets />
        </nav>
    )
}

export default NavBar
//SS
