import Link from "next/link"

export default function Navbar() {
  return (
    <body>
      <div>
        <li className="inline-block flex flex justify-center  rounded bg-slate-900 py-2 px-4 text-white">
          <a className=" inline-block flex flex justify-center  rounded bg-slate-900 py-2 px-4  text-white">
            Bienvenue sur le CringeBlog
          </a>
          <li className="justify-center">
            <Link href="/users/login">
              <a className="inline-block rounded   py-2 px-4 text-white hover:border-gray-800 hover:bg-slate-900">
                Se connecter / Créer son Compte
              </a>
            </Link>
          </li>
          <li className="justify-center">
            <Link href="/new">
              <a className="inline-block rounded   py-2 px-4 text-white hover:border-gray-800 hover:bg-slate-900">
                Créer un article
              </a>
            </Link>
          </li>
        </li>
      </div>
    </body>
  )
}
