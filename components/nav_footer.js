import Link from "next/link"

export default function Footer() {
  return (
    <nav>
      <footer className="bg-gray-200 text-center lg:text-left">
        <div style={{ position: "absolute", bottom: 0, width: "100%" }}>
          {" "}
          <div className="p-4 text-center text-gray-700"></div>
          <Link href="https://www.linkedin.com/in/avetisk/">
            <a className="inline-block flex flex justify-center  rounded py-2 px-4 text-white hover:bg-slate-900">
              {" "}
              © Made By Enzo Adam and P-A with Love.
            </a>
          </Link>
        </div>
      </footer>
    </nav>
  )
}
