import Link from "next/link"

export default function Navuser() {
  return (
    <ul className=" inline-block flex flex justify-center  rounded  bg-slate-900 py-2 px-4 text-white  hover:bg-slate-900">
      <li className="">
        <Link href="/">
          <a className="inline-block flex flex justify-center  rounded  bg-slate-900 py-2 px-4 text-white  hover:bg-slate-900">
            {" "}
            CringeBlog
          </a>
        </Link>
      </li>
    </ul>
  )
}
