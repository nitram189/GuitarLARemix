import { Link, useLocation } from "@remix-run/react";
import logo from "../../public/img/carrito.png";


export default function Navigation() {

    const location = useLocation();

  return (
    <nav className="navegacion">
          <Link
            to='/'
            className={ location.pathname === '/' ? 'active' : '' }>
              Index
          </Link>
          <Link
            to='/guitars'
            className={ location.pathname === '/guitars' ? 'active' : '' }>
              Market
          </Link>
          <Link
            to='/about'
            className={ location.pathname === '/about' ? 'active' : '' }>
              About
          </Link>
          <Link
            to='/posts'
            className={ location.pathname === '/posts' ? 'active' : '' }>
              Blog
          </Link>
          <Link
            to='/cart'>
              <img src={ logo } alt='cart logo' />
          </Link>
        </nav>
  )
}
