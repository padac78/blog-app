import Link from "next/link"
import { useState, useEffect } from "react"
import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"

const NewPost = () => {
  const [form, setForm] = useState({ title: "", text: "" })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        createposts()
        alert("Publication créée")
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors])

  const createposts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      })
      router.push("/")
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    let errs = validate()
    setErrors(errs)
    setIsSubmitting(true)
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }

  const validate = () => {
    let err = {}

    if (!form.title) {
      err.title = "Le titre est requis"
    }
    if (!form.text) {
      err.text = "Le contenu est requis"
    }

    return err
  }

  return (
    <div className="form-container">
      <h1>Créer une publication</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="titre"
            className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
            placeholder="Vous devez saisir un titre"
          />
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
