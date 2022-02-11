const fetch = require("isomorphic-unfetch")
import Navuser from "../../components/nav_user"
import Footer from "../../components/nav_footer"
import Link from "next/link"

const Comment = ({ comment }) => {
  return (
    <body className="bg-slate-800">
      <Navuser />

      <div className="mb-10 text-center text-sm">
        <h1 className="text-white">Commentaires</h1>
        <h1 className=" rounded-md  py-2 px-4 text-white  ">{comment.text}</h1>

        <div key={comment._id}></div>
      </div>
      <Footer />
    </body>
  )
}

Comment.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/comments/${id}`)
  const { data } = await res.json()

  return { comment: data }
}

module.exports = Comment
