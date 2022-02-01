const fetch = require("isomorphic-unfetch");
import Navuser from "../../components/nav_user";
import Footer from "../../components/nav_footer";
import Link from "next/Link";
import React, { useState } from "react";

const Login = ({ login }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <body className="font-family-karla bg-white">
      <Navuser />

      <div className="my-2 overflow-hidden rounded shadow-lg">
        <div className="px-6 py-5">
          <form className="flex flex-col">
            <label className="block">
              <span className="block text-sm font-medium text-slate-700 after:ml-0.5 after:text-red-500 after:content-['*']">
                Email
              </span>
              <input
                type="email"
                name="email"
                className="mt-1 block w-full rounded-md border border-slate-300 bg-white px-3 py-2 placeholder-slate-400 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm"
                placeholder="you@example.com"
              />
              <p className=" mt-2 text-sm text-pink-600 peer-invalid:visible">
                Veuillez renseignez un mail valide svp
              </p>
            </label>
            <label htmlFor="password" className="mb-2 italic">
              Mot de passe
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              className="peer bg-gray-100 placeholder-transparent focus:outline-none "
            />
            <label
              onClick={() => setShowPassword(!showPassword)}
              className="cursor-pointer rounded bg-gray-300 px-2 py-1 font-mono text-sm text-gray-600 hover:bg-gray-400 "
            >
              {showPassword ? "Cacher" : "Voir"}
            </label>
            <button
              type="submit"
              className="rounded-full bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700"
            >
              Se Connecter
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </body>
  );
};

module.exports = Login;
