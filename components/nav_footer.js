import Link from "next/link"

export default function Footer() {
  return (
    <footer className="text-center lg:text-left">
      <div style={{ position: "fixed", bottom: 0, width: "100%" }}>
        {" "}
        <div className="text-center text-gray-700"></div>
        <Link href="https://www.linkedin.com/in/avetisk/">
          <a className=" inline-block flex flex justify-center rounded  bg-slate-900 py-2 px-4 text-white ">
            {" "}
            © Made By Enzo Adam and P-A with Love.
          </a>
        </Link>
      </div>
    </footer>
  )
}
