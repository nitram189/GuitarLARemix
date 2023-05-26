import { Link } from "@remix-run/react"
import logo from '../../public/img/logo.svg';
import Navigation from "./navigation";


export default function Header() {

  return (
    <header className="header">
      <div className="contenedor barra">
        
        <Link
          to='/'>
          <img src={ logo } alt="logo image" className="logo" />
        </Link>
        
        <Navigation/>
        
      </div>
    </header>
  )
}
