
import { Outlet, useOutletContext } from "@remix-run/react";
import styles from '~/styles/guitars.css';


export function links() {
  return [
    { rel: 'stylesheet',
      href: styles }
  ]
}

export default function Market() {

  return (
    <main className="contenedor">
      <Outlet
        context={ useOutletContext() } />
    </main> 
  )
}
