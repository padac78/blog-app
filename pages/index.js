/* eslint-disable react/no-unescaped-entities */
const fetch = require("isomorphic-unfetch")
import Navbar from "../components/nav"
import Footer from "../components/nav_footer"
import Link from "next/link"

const Home = ({ posts }) => {
  return (
    <body className="font-family-karla bg-white">
      <Navbar />
      {posts.map((post) => {
        return (
          <div className="mb-10 text-center text-sm" key={post._id}>
            <div className="mb-10 text-center text-sm">
              <div className="text-4xl font-medium text-black">
                {post.title}
              </div>
              <p className="text-slate-500">{post.text.substring(0, 50)}..."</p>
              <div>
                (
                <Link href="/[id]" as={`/${post._id}`}>
                  <a>Consulter Article</a>
                </Link>
                )
              </div>
            </div>
          </div>
        )
      })}
      <Footer />
    </body>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch("http://localhost:3000/api/posts")
  const { data } = await res.json()

  return { posts: data }
}

module.exports = Home
