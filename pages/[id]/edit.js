import Link from "next/link"
import { useState, useEffect } from "react"
import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"
import Navuser from "../../components/nav_user"
import Footer from "../../components/nav_footer"

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
    <div>
      <body>
        <div className="bg-slate-800">
          <Navuser />
          <div className="text-center italic text-white">
            Editer la publication
          </div>

          <div className="px-6 py-5 text-center"></div>
          <form className=" flex flex-col text-center"></form>
          <div>
            <form onSubmit={handleSubmit} className="text-center">
              <label
                htmlFor="title"
                className=" mb-2 resize rounded-md text-center italic text-white"
              >
                Titre :
              </label>
              <input
                type="text"
                name="title"
                value={title}
                onChange={handleChange}
                className="resize  rounded rounded-md bg-slate-900 py-2 px-4 text-white "
              />

              <div>
                <label className="mb-2 resize rounded-md text-center italic text-white">
                  {" "}
                  Texte :
                </label>

                <div className="px-6 py-5 text-center"></div>
                <form className=" text-center"></form>

                <textarea
                  className="resize rounded-md bg-slate-900 py-2 px-4 text-white  "
                  type="textarea"
                  name="text"
                  value={text}
                  onChange={handleChange}
                />
                <div>
                  <button
                    type="submit"
                    className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
                  >
                    Editer
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </body>
    </div>
  )
}

EditPost.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  const { data } = await res.json()

  return { post: data }
}

export default EditPost
