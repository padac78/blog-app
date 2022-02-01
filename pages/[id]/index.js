const fetch = require("isomorphic-unfetch")
import Navuser from "../../components/nav_user"
import Footer from "../../components/nav_footer"

const Post = ({ post }) => {
  return (
    <body className="font-family-karla bg-white">
      <Navuser />

      <div className="post-container">
        <div className="mb-10 text-center text-sm" key={post._id}>
          <p className="mb-10 text-5xl font-medium text-black">{post.title}</p>
          <p className="text-2xl ">{post.text}</p>
        </div>
      </div>
      <Footer />
    </body>
  )
}

Post.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  const { data } = await res.json()

  return { post: data }
}

module.exports = Post
