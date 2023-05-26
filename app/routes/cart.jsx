
import { useOutletContext } from "react-router";
import styles from "../styles/cart.css";
import { useState, useEffect } from "react";

export function links() {
    return [
        { rel: 'stylesheet',
          href: styles
        }
    ]
}

export function meta() {
    return [
        { title:'GuitarLA - Shopping cart' },
        { description: 'music store, legends of rock, guitars, bass, blogs, learning' }
    ]
}


export default function Cart() {

  const [total, setTotal] = useState(0)
  const { carrito, actualizarCantidad, eliminarGuitarra } = useOutletContext();

  useEffect(() => {
    const toPay = carrito.reduce(( total, guitar ) => total + ( guitar.cantidad * guitar.price ), 0)
    setTotal( toPay )
  }, [ carrito ])
  

  return (
    <main className="contenedor">
      <h1>shopping cart.</h1>

      <div className="contenido">

        <div className="carrito">
          <h2>Products</h2>
          { carrito.length === 0
            ? 'There are no selected items yet'
            : ( carrito.map( guitar => (
                  <div key={ guitar.id } className="producto">
                    <div>
                      <img src={ guitar.image } alt={ `${ guitar.name } guitar image` } />
                    </div>
                    <div>
                      <p className="nombre">{ guitar.name }</p>
                      
                      <p className="cantidad">Quantity:</p>
                      <select
                        value={ guitar.cantidad }
                        onChange={ e => actualizarCantidad({
                          cantidad: +e.target.value,
                          id: guitar.id
                        })}
                        className="select">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                      </select>
                      <p className="precio">$<span>{ guitar.price }</span></p>
                      <p className="subtotal">Subtotal: $<span>{ guitar.price * guitar.cantidad  }</span></p>
                      <button
                        type="button"
                        className="btn-eliminar"
                        onClick={ () => eliminarGuitarra( guitar.id ) }>
                        Remove</button>
                    </div>
                    
                  </div>
            )))}
        </div>

        <aside className="resumen">
          <h3>Summary</h3>
          <p>Total to pay: ${ total }</p>
        </aside>

      </div>

      

    </main>
  )
}
