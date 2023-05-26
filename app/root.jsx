import { Links, Meta, Outlet, Scripts, LiveReload, useRouteError, isRouteErrorResponse, Link } from "@remix-run/react";
import styles from '~/styles/index.css';
import Header from "~/components/header";
import Footer from "~/components/footer";
import { useEffect, useState } from "react";


export function meta() {
    return ([
        { charset: 'utf-8' },
        { title: 'GuitarLA - Remix' },
        { viewport: 'width=device-width,initial-scale=1' }
    ])
}

export function links() {
    return [
        { rel: 'stylesheet', href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css' },

        { rel: 'stylesheet', href: styles },

        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },

        { rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossOrigin: 'true' },

        { rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap' },

    ]
}

export default function App() {

  const carritoLS = typeof window !== 'undefined' && JSON.parse(localStorage.getItem( 'carrito' )) || []
  const [ carrito, setCarrito ] = useState( carritoLS );

  useEffect(()=> {
    localStorage.setItem( 'carrito', JSON.stringify(carrito) )
  }, [ carrito ])

  const agregarAlCarrito = guitar => {
    if( carrito.some( guitarState => guitarState.id === guitar.id )){
      
      const carritoActualizado = carrito.map( guitarState => {
        if( guitarState.id === guitar.id ) {
          guitarState.cantidad = guitar.cantidad
        }
        return guitarState
        
      })
      setCarrito( carritoActualizado )
    }
    else {
      setCarrito([...carrito, guitar])
    }
  }

  const actualizarCantidad = guitar => {
    const carritoActualizado = carrito.map( guitarState => {
      if( guitarState.id === guitar.id ) {
        guitarState.cantidad = guitar.cantidad
      }
      return guitarState
    })
    setCarrito( carritoActualizado )
  }

  const eliminarGuitarra = id => {
    const carritoActualizado = carrito.filter( guitarState => 
        guitarState.id !== id ) 
      setCarrito( carritoActualizado )
  }

    return (
        <Document>
          <Outlet
            context={{
              agregarAlCarrito,
              carrito,
              actualizarCantidad,
              eliminarGuitarra
            }}/>
        </Document>
    )
}

function Document({ children }) {
    return (
        <html>
          <head>
            <Meta/>
            <Links/>
          </head>
          <body>
            <Header />
            { children }
            <Footer />

            <Scripts/>
            <LiveReload/>
          </body>
        </html>
    )
}

export function ErrorBoundary() {

  const error = useRouteError();

  if(isRouteErrorResponse( error )) {
    return (
      <Document>
        <p className="error">{ error.status } { error.statusText }</p>
        <Link to='/' className="error-enlace">Back to index</Link>
        <Link to='/market' className="error-enlace">Back to market</Link>
        
      </Document> 
    )
  }
}