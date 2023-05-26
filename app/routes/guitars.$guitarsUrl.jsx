import { useLoaderData, useOutletContext } from "react-router";
import { getGuitar } from "../models/guitars.server";
import { useState } from "react";


export async function loader({ params }) {
  const { guitarsUrl } = params;
  const guitar = await getGuitar( guitarsUrl )
  
  if( guitar.data.length === 0 ) {
    throw new Response('', {
      status: 404,
      statusText: 'Guitar not found'
    })
  }
  return guitar
}

export function meta({ data }) {

  if( !data ){
    return [
      { title: 'GuitarLA - Guitar not found',
        description: 'Guitars, Legends of rock and their guitars, guitar shop, guitar not found'
      }]}
  else {
    return [ 
      { title: `GuitarLA - ${ data.data[0].attributes.name }`,
        description: `Guitars, Legends of rock and their guitars, guitar shop, ${ data.data[0].attributes.name }'s guitar`
   }]
  }
}


export default function Guitar() {

  const { agregarAlCarrito } = useOutletContext();
  
  const [ cantidad, setCantidad ] = useState(0);
  const guitar = useLoaderData();
  const { name, description, price, image } = guitar.data[0].attributes;
  
  const handleSubmit = e => {
    e.preventDefault();
  
    if( cantidad < 1 ) {
      alert('Select at least 1 guitar')
      return
    }
    const guitarraSeleccionada = {
      id: guitar.data[0].id,
      image: image.data.attributes.url,
      name,
      price,
      cantidad
    }
    
    agregarAlCarrito(guitarraSeleccionada);
  }
      
  return (
    <div className="guitarra">
      <img src={ image.data.attributes.url } alt={ `${ name } guitar `}/>

      <div className="contenido">
        <h3>{ name }</h3>
        <p className="texto">{ description }</p>
        <p className="precio">${ price }</p>

        <form 
          className="formulario"
          onSubmit={ handleSubmit }>
          <label htmlFor="cantidad">Quantity</label>

          <select
            id="cantidad"
            onChange={ e => setCantidad( +e.target.value )}>
            <option value="0">-- Select --</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <input
            type="submit"
            value="Add to cart"/>
        </form>
      </div>
    </div>
  )
}
