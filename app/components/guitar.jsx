import { Link } from "@remix-run/react";


export default function Guitar({ guitar }) {

    const { name, description, image, price, url } = guitar;

  return (
    <div className="guitarra">
      <img src={ image.data.attributes.formats.medium.url } alt={`${name} guitar`}/>
      <div className="contenido">
        <h3>{ name }</h3>
        <p className="descripcion">{ description }</p>
        <p className="precio">${ price }</p>

        <Link
          to={`/guitars/${ url }`}
          className="enlace">More info</Link>
      </div>
    </div>
  )
}
