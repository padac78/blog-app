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
    <div>
      <body className="bg-slate-800">
        <Navuser />
        <div className="bg-slate-800">
          <div className="bg-slate-800">
            <div className="text-center italic text-white">
              Créer une publication
            </div>

            <div className="px-6 py-5 text-center"></div>
            <form className="flex flex-col text-center"></form>
            <div>
              <form onSubmit={handleSubmit} className="text-center">
                <label
                  htmlFor="title"
                  className=" mb-2 resize rounded-md text-center italic text-white"
                >
                  Titre :
                </label>
                <div>
                  <input
                    type="text"
                    name="title"
                    className="  resize  rounded rounded-md bg-slate-900 py-2 px-4 text-white  "
                    placeholder="Vous devez saisir un titre"
                  />
                </div>

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
                  placeholder="Vous devez saisir un contenu"
                />
                <label
                  htmlFor="text"
                  className="mb-2 italic text-white"
                ></label>

                <div>
                  <button
                    type="submit"
                    className=" rounded bg-slate-900  py-2 px-4 text-center text-white   hover:text-sky-400"
                  >
                    Publier
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </body>
      <Footer />
    </div>
  )
}

export default NewPost
