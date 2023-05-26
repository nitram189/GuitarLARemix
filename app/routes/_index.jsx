import { useLoaderData } from "@remix-run/react"
import { getGuitars } from "~/models/guitars.server"
import { getPosts } from "~/models/posts.server"
import { getCourse } from "~/models/course.server"
import stylesGuitars from "~/styles/guitars.css"
import stylesPosts from "~/styles/blog.css"
import stylesCourse from "~/styles/course.css"
import GuitarsList from "~/components/guitarsList"
import PostsList from "~/components/postsList"
import Course from "~/components/course"



export function meta() {
  return [
    { title: 'GuitarLA - Index',
      description: 'guitars, instruments, amps, everything for musicians, blogs, learning courses' }
  ]
}

export function links() {
  return [
    { rel: 'stylesheet',
      href: stylesGuitars },

    { rel: 'stylesheet',
      href: stylesPosts },
    
    { rel: 'stylesheet',
      href: stylesCourse }
  ]
}

export async function loader() {
  const [ guitars, posts, course ] = await Promise.all([
    getGuitars(),
    getPosts(),
    getCourse()
  ])

  return {
    guitars: guitars.data,
    posts: posts.data,
    course: course.data
  }
}

export default function Index() {

  const { guitars, posts, course } = useLoaderData();
  
  return (
    <>
      <main className="contenedor">
        <GuitarsList
          guitars={ guitars }/>
      </main>

      <Course
        course={ course }/>

      <section className="contenedor">
        <PostsList
          posts={ posts }/>
      </section>

    </>
  )
}
