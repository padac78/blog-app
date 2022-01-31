const fetch = require("isomorphic-unfetch")

const Post = ({ post }) => {
  return (
    <div className="post-container">
      <h1>Post</h1>
      <div key={post._id}>
        <p>{post.title}</p>
        <p>{post.text}</p>
      </div>
    </div>
  )
}

Post.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  const { data } = await res.json()

  return { post: data }
}

module.exports = Post
