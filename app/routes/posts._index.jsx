
import { useLoaderData } from "@remix-run/react"
import { getPosts } from "~/models/posts.server";
import PostsList from "../components/postsList";


export function meta() {
  return [
    { title: 'GuitarLA - Blog' },
    { description: 'Music blog, new techniques for beginners, your first guitar, electric sound, acoustic sound' }
  ]
}

export async function loader() {
  const posts = await getPosts()
  return posts.data
}

export default function Blog() {

  const posts = useLoaderData();

  return (
    
      <PostsList
        posts={ posts }/>
  )
}
