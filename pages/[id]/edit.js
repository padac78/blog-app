import Link from "next/link"
import { useState, useEffect } from "react"
import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"
import Navuser from "../components/nav_user"
import Footer from "../components/nav_footer"

const EditPost = ({ post }) => {
  const router = useRouter()
  const [data, setData] = useState({
    title: post.title,
    text: post.text,
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title: e.target.title.value,
      text: e.target.text.value,
    }
    try {
      fetch(`http://localhost:3000/api/posts/${post._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      alert("Publication mise à jour")
      router.push(`/${post._id}`)
    } catch (error) {
      console.log(error)
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target
    setData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  }

  const { title, text } = data
  return (
    <div className="form-container">
      <h1>Editer une publication</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          />
          <label htmlFor="text">Texte :</label>
          <input
            type="textarea"
            name="text"
            value={text}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
          />
          <button
            type="submit"
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Editer
          </button>
        </form>
      </div>
    </div>
  )
}

EditPost.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  const { data } = await res.json()

  return { post: data }
}

export default EditPost
