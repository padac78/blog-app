const fetch = require("isomorphic-unfetch")
const { useRouter } = require("next/router")
import Navuser from "../../components/nav_user"
import Footer from "../../components/nav_footer"

const Post = ({ post }) => {
  const router = useRouter()

  const handleDelete = async () => {
    if (confirm("Voulez-vous vraiment supprimer?") == true) {
      try {
        fetch(`http://localhost:3000/api/posts/${post._id}`, {
          method: "DELETE",
        })

        router.push("/")
      } catch (error) {
        console.log(error)
      }
    }
  }

  const redirect = async () => {
    router.push(`./${post._id}/edit`)
  }

  return (
    <body className="bg-slate-800">
      <Navuser />

      <div className="post-container">
        <div className="mb-10 text-center text-sm" key={post._id}>
          <p className="mb-10 text-5xl font-medium text-white">{post.title}</p>
          <p className="text-2xl text-white ">{post.text}</p>

          <button
            type="button"
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={redirect}
          >
            Editer
          </button>
          <button
            type="button"
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            onClick={handleDelete}
          >
            Supprimer
          </button>
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
