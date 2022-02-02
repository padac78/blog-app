const fetch = require("isomorphic-unfetch")
import Navbar from "../components/nav"
import Footer from "../components/nav_footer"
import Link from "next/Link"

const Home = ({ posts }) => {
  return (
    <body className="bg-slate-800">
      <Navbar />
      {posts.map((post) => {
        return (
          <div className="mb-10 text-center text-sm " key={post._id}>
            <div className="rounded py-2 px-4 text-white">
              <div className="text text-2xl font-medium ">
                {post.title}
                <div>
                  <Link
                    className="bg-sky-rounded rounded-full border-none bg-blue-500 py-2 px-4 px-4 py-2 text-white text-white hover:border-gray-200"
                    href="/[id]"
                    as={`/${post._id}`}
                  >
                    <a className="text-slate-400 hover:text-sky-400">
                      {" "}
                      Consulter Article
                    </a>
                  </Link>
                </div>
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
