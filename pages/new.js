import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"
import Navuser from "../components/nav_user"
import Footer from "../components/nav_footer"

const NewPost = () => {
  const router = useRouter()
  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      title: e.target.title.value,
      text: e.target.text.value,
    }
    try {
      fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      alert("Publication postée")
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <body className="bg-slate-800">
      <Navuser />
      <div className="bg-slate-800">
        <div className="bg-slate-800">
          <form className="flex flex-col">
            <div className="text-center uppercase text-white">
              Créer une publication
            </div>
            <div className="px-6 py-5"></div>
            <form className="flex flex-col"></form>
            <div>
              <form onSubmit={handleSubmit}>
                <label htmlFor="title" className="mb-2 italic text-white">
                  Titre :
                </label>
                <input
                  type="text"
                  name="title"
                  className="inline-block flex flex justify-center  rounded  bg-slate-900 py-2 px-4 text-white  hover:bg-slate-900"
                  placeholder="Vous devez saisir un titre"
                />
                <label htmlFor="text" className="mb-2 italic text-white">
                  Texte :
                </label>
                <input
                  type="textarea"
                  name="text"
                  className="inline-block flex flex justify-center  rounded  bg-slate-900 py-2 px-4 text-white  hover:bg-slate-900"
                  placeholder="Vous devez saisir un contenu"
                />
                <button
                  type="submit"
                  className="inline-block flex flex justify-center  rounded  bg-slate-900 py-2 px-4 text-white   hover:text-sky-400"
                >
                  Publier
                </button>
              </form>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </body>
  )
}

export default NewPost
