const fetch = require("isomorphic-unfetch")

const Home = ({ posts }) => {
  return (
    <div className="post-container">
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post._id}>
            <p>{post.title}</p>
            <p>{post.text}</p>
          </div>
        )
      })}
    </div>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts")
  const { data } = await res.json()

  return { posts: data }
}

module.exports = Home
