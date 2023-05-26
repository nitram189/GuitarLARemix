import Post from "./post"


export default function PostsList({ posts }) {
  return (
    <>
      <h2 className="heading">Blog</h2>
      <div className="blog">
        {
          posts.map( blog => (
            <Post
              key={ blog.id }
              blog={ blog.attributes }/>
          ) )
        }
      </div>
    </>
  )
}
