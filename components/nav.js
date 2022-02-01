import Link from "next/Link";

export default function Navbar() {
  return (
    <ul
      className="inline-block flex flex justify-center justify-between rounded border border-blue-500 bg-blue-500 py-2 px-4 text-white hover:bg-blue-700
"
    >
      <li className="flex justify-center">
        <a className=" text-white-500 inline-block  rounded border-white py-2 px-4 ">
          Bienvenue sur le CringeBlog
        </a>
      </li>

      <li className="mr-3">
        <Link href="/users/login">
          <a className="text-white-500 inline-block  rounded border-white py-2 px-4 hover:border-gray-200 hover:bg-gray-200">
            Se connecter / Créer son Compte
          </a>
        </Link>
      </li>
    </ul>
  );
}
