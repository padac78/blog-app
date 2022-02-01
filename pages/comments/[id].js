const fetch = require("isomorphic-unfetch")

const Comment = ({ comment }) => {
  return (
    <div className="post-container">
      <h1>Comments</h1>
      <div key={comment._id}>
        <p>{comment.text}</p>
      </div>
    </div>
  )
}

Comment.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/comments/${id}`)
  const { data } = await res.json()

  return { comment: data }
}

module.exports = Comment
