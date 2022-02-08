const fetch = require("isomorphic-unfetch")
const { useState, useEffect } = require("react")
const { useRouter } = require("next/router")
import Navuser from "../../components/nav_user"
import Footer from "../../components/nav_footer"

const Post = ({ post }) => {
  /*
  const [confirm, setConfirm] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const router = useRouter()

  useEffect(() => {
    if (isDeleting) {
      deletePost()
    }
  }, [isDeleting])

  const open = () => setConfirm(true)

  const close = () => setConfirm(false)

  const deletePost = async () => {
    const postId = router.query.id
    try {
      const deleted = await fetch(`http://localhost:3000/api/posts/${postId}`, {
        method: "Delete",
      })

      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleDelete = async () => {
    setIsDeleting(true)
    close()
  }
  */
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
