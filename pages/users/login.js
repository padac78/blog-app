const fetch = require("isomorphic-unfetch")
import Navuser from "../../components/nav_user"
import Footer from "../../components/nav_footer"
import React, { useState } from "react"

const Login = ({ login }) => {
  const [showPassword, setShowPassword] = useState(false)
  return (
    <body className="bg-slate-800">
      <Navuser />
      <div className="bg-slate-800">
        <div className="px-6 py-5">
          <form className="flex flex-col">
            <label className="block">
              <span className="centerblock flex text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Email
              </span>
              <input
                type="email"
                placeholder="Email"
                className="inline-block flex flex justify-center  rounded  bg-slate-900 py-2 px-4 text-white  hover:bg-slate-900"
              />
            </label>
            <label htmlFor="password" className="mb-2 italic">
              Mot de passe
              <input
                type={showPassword ? "text" : "password"}
                className="inline-block flex flex justify-center  rounded  bg-slate-900 py-2 px-4 text-white  hover:bg-slate-900"
                placeholder="password"
              />
              <label
                onClick={() => setShowPassword(!showPassword)}
                className="block "
              >
                {showPassword ? "Cacher" : "Voir"}
              </label>
            </label>

            <button
              type="submit"
              className="inline-block flex flex justify-center  rounded  bg-slate-900 py-2 px-4 text-white   hover:text-sky-400"
            >
              Se Connecter
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </body>
  )
}

module.exports = Login
