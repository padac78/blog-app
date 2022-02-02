import Link from "next/link"

export default function Navbar() {
  return (
    <ul className="inline-block flex flex justify-center  rounded py-2 px-4 text-white hover:bg-slate-900">
      <li className="flex justify-center">
        <a className=" text-white-500 inline-block  rounded border-white py-2 px-4 ">
          Bienvenue sur le CringeBlog
        </a>
      </li>

      <li className="mr-3">
        <Link href="/users/login">
          <a className="text-white-500 inline-block  rounded border-white py-2 px-4 hover:border-gray-200 hover:bg-gray-600">
            Se connecter / Créer son Compte
          </a>
        </Link>
      </li>
    </ul>
  )
}
