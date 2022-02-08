import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"

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
      alert("Publication posté")
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="form-container">
      <h1>Créer une publication</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <label htmlFor="title">Titre :</label>
          <input
            type="text"
            name="title"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Vous devez saisir un titre"
          />
          <label htmlFor="text">Texte :</label>
          <input
            type="textarea"
            name="text"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Vous devez saisir un contenu"
          />
          <button
            type="submit"
            className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
          >
            Publier
          </button>
        </form>
      </div>
    </div>
  )
}

export default NewPost
