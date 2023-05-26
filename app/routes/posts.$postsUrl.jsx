import { useLoaderData } from "@remix-run/react";
import { getPost } from "~/models/posts.server"
import { formatearFecha } from "~/utils/helpers";
import styles from "~/styles/blog.css";

export async function loader({ params }) {
    const { postsUrl } = params;
    const post = await getPost(postsUrl)
    if( post.data.length === 0 ) {
        throw new Response('', {
            status: 404,
            statusText: 'Blog not found'
        })
    }
    return post.data
}

export function meta({ data }) {
    if( !data ) {
        
        return [
            { title: 'GuitarLA - Blog not found' },
            { description: 'Music blog, new techniques for beginners, your first guitar, guitar not found' }
          ]
    }
    return [
      { title: `GuitarLA - ${ data[0].attributes.title }` },
      { description: 'Music blog, new techniques for beginners, your first guitar, electric sound, acoustic sound' }
    ]
  }

export function links() {
    return [
        { rel: 'stylesheet',
          href: styles}
    ]
}

export default function Post() {

    const post = useLoaderData();
    const { title, description, publishedAt, image } = post[0].attributes;

  return (
    <article className="post mt-3">
      <img className="imagen" src={ image?.data?.attributes.url } alt={`${ title } image`}/>
      <div className="contenido">
        <h3>{ title }</h3>
        <p className="fecha">{ formatearFecha(publishedAt) }</p>
        <p className="texto">{ description }</p>
      </div>
    </article>
  )
}
