import Link from "next/link"
import { useState, useEffect } from "react"
import fetch from "isomorphic-unfetch"
import { useRouter } from "next/router"

const EditPost = ({ posts }) => {
  const [form, setForm] = useState({ title: posts.title, text: posts.text })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [errors, setErrors] = useState({})
  const router = useRouter()

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(errors).length === 0) {
        updatePost()
      } else {
        setIsSubmitting(false)
      }
    }
  }, [errors])

  const updatePost = async () => {
    try {
      const res = await fetch(
        `http://localhost:3000/api/posts/${router.query.id}`,
        {
          method: "PUT",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        }
      )
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
      <h1>Editer une publication</h1>
    </div>
  )
}

EditPost.getInitialProps = async ({ query: { id } }) => {
  const res = await fetch(`http://localhost:3000/api/posts/${id}`)
  const { data } = await res.json()

  return { posts: data }
}

export default EditPost
