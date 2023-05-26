import { Link } from "@remix-run/react";
import { formatearFecha } from "~/utils/helpers";


export default function Post({ blog }) {

    const { title, description, publishedAt, image, url } = blog;
  
    return (
    <article className="post">
      <img className="imagen" src={ image.data.attributes.formats.small.url } alt={`${ title } image`}/>
      <div className="contenido">
        <h3>{ title }</h3>
        <p className="fecha">{ formatearFecha(publishedAt) }</p>
        <p className="resumen">{ description }</p>

        <Link className="enlace" to={ `/posts/${ url }`} >Read more</Link>
      </div>


    </article>
  )
}
